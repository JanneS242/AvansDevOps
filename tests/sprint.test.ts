import { ScrumMaster } from "../src/models/users/scrumMaster";
import { SMSAdapter } from "../src/observer/adapter/SMSAdapter";
import { SMSNotification } from "../src/observer/SMSNotification";
import { Command } from "../src/pipeline/command";
import { Folder } from "../src/pipeline/folder";
import { Pipeline } from "../src/pipeline/pipeline";
import { PdfReportBehaviour } from "../src/report/pdfReportBehaviour";
import { Report } from "../src/report/report";
import { SprintFactory } from "../src/sprint/sprintFactory";

describe("BacklogItem and Activity tests", () => {
    let scrumMaster: ScrumMaster;

    beforeAll(() => {
        jest.spyOn(global.console, 'error').mockImplementation(() => {});
        jest.spyOn(global.console, 'log').mockImplementation(() => {});
    });

    beforeEach(() => {
        scrumMaster = new ScrumMaster("Janne", "Sterk", new Date(2001,1,1), "j.sterk@avans.nl", "066223432");;
    });

    afterEach(() =>{
        jest.spyOn(global.console, 'log').mockClear();
        jest.spyOn(global.console, 'error').mockClear();
    });

    it("Create reviewsprint and start pipeline - summary is uploaded", () => {
        const sprintFactory = new SprintFactory();
        const reviewSprint1 = sprintFactory.createSprint('review', 1, 'sprint1', new Date(), new Date(2024,1,1), scrumMaster, new Report(1, new PdfReportBehaviour()))

        const folder = new Folder("Git");
        const command = new Command("git clone ...");
        
        reviewSprint1.setPipeline(new Pipeline("Sprint 1 pipeline"));
        reviewSprint1.pipeline?.addJob(folder);
        folder.addComponent(command);
        reviewSprint1.uploadSummary();
        reviewSprint1.startPipeline();

        expect(console.log).toBeCalledWith('Starting pipeline for reviewSprint');

    });

    it("Create reviewsprint and start pipeline - summary is NOT uploaded", () => {
        const sprintFactory = new SprintFactory();
        const reviewSprint2 = sprintFactory.createSprint('review', 1, 'sprint1', new Date(), new Date(2024,1,1), scrumMaster, new Report(1, new PdfReportBehaviour()))

        reviewSprint2.setPipeline(new Pipeline("Sprint 1 pipeline"));
        reviewSprint2.pipeline?.addJob(new Folder("Git"));
        reviewSprint2.startPipeline();

        expect(console.log).toBeCalledWith('Cannot start pipeline because there is no summaryUploaded');

    });

    it("Create reviewsprint and start pipeline - end date has expired", () => {
        const sprintFactory = new SprintFactory();
        const reviewSprint3 = sprintFactory.createSprint('review', 1, 'sprint1', new Date(), new Date(2022,1,1), scrumMaster, new Report(1, new PdfReportBehaviour()))

        reviewSprint3.setPipeline(new Pipeline("Sprint 1 pipeline"));
        reviewSprint3.pipeline?.addJob(new Folder("Git"));
        reviewSprint3.uploadSummary();
        reviewSprint3.startPipeline();

        expect(console.log).toBeCalledWith('End date has already expired');

    });

    it("Create release sprint and start pipeline - succesful", () => {
        const sprintFactory = new SprintFactory();
        const releaseSprint = sprintFactory.createSprint('release', 1, 'sprint1', new Date(), new Date(2024,1,1), scrumMaster, new Report(1, new PdfReportBehaviour()))
        
        releaseSprint.setPipeline(new Pipeline("Sprint 1 pipeline"));
        releaseSprint.pipeline?.addJob(new Folder("Git"));
        releaseSprint.successfullSprint();
        releaseSprint.startPipeline();

        expect(console.log).toBeCalledWith('Starting pipeline for release sprint');

    });

    it("Create release sprint and start pipeline - cancelled", () => {
        const sprintFactory = new SprintFactory();
        const releaseSprint = sprintFactory.createSprint('release', 1, 'sprint1', new Date(), new Date(2024,1,1), scrumMaster, new Report(1, new PdfReportBehaviour()))

        releaseSprint.scrumMaster.addNotificationType(new SMSNotification(releaseSprint.scrumMaster.phoneNumber, new SMSAdapter()));

        releaseSprint.setPipeline(new Pipeline("Sprint 1 pipeline"));
        releaseSprint.pipeline?.addJob(new Folder("Git"));
        releaseSprint.startPipeline();

        expect(console.log).toBeCalledWith('Release sprint is cancelled');
    });



});