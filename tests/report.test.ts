import { report } from "process";
import { Developer } from "../src/models/users/developer";
import { ProductOwner } from "../src/models/users/productOwner";
import { ScrumMaster } from "../src/models/users/scrumMaster";
import { Tester } from "../src/models/users/tester";
import { PdfReportBehaviour } from "../src/report/pdfReportBehaviour";
import { PngReportBehaviour } from "../src/report/pngReportBehaviour";
import { Report } from "../src/report/report";
import { ReportComponent } from "../src/report/reportComponent";
import { ReviewSprint } from "../src/sprint/reviewSprint";
import { SprintFactory } from "../src/sprint/sprintFactory";

describe("Report tests", () =>{
    let productOwner: ProductOwner;

    let scrumMaster: ScrumMaster;

    let tester: Tester;

    let developer: Developer;

    beforeAll(() => {
        jest.spyOn(global.console, 'error').mockImplementation(() => {});
        jest.spyOn(global.console, 'log').mockImplementation(() => {});
    });

    beforeEach(() => {

        productOwner = new ProductOwner("Janne", "Sterk", new Date(24-2-2001), "j.sterk@avans.nl", "066223432");

        scrumMaster = new ScrumMaster("Janne", "Sterk", new Date(24-2-2001), "j.sterk@avans.nl", "066223432");;

        tester = new Tester("Janne", "Sterk", new Date(24-2-2001), "j.sterk@avans.nl", "066223432");;

        developer = new Developer("Janne", "Sterk", new Date(24-2-2001), "j.sterk@avans.nl", "066223432");;

    });
    
    it("Generate a report from a sprint - pdf", () => {
        const sprintFactory = new SprintFactory();
        const reviewSprint = sprintFactory.createSprint('review', 1, 'sprint1', new Date(), new Date(1-1-2024), scrumMaster, new Report(1, new PdfReportBehaviour()))

        reviewSprint.report.setEffortPoints("203");
        reviewSprint.report.setHeader("logo", "project X", "Cool business", 1, new Date());
        reviewSprint.report.setFooter("logo", "project X", "Cool business", 1, new Date());
        reviewSprint.report.setTeamComposition("a lot of teammembers");

        reviewSprint.generateReport();

        expect(console.log).toBeCalledWith('Sprint report has been created! - pdf');
    });

    it("Generate a report from a sprint - png", () => {
        const sprintFactory = new SprintFactory();
        const reviewSprint = sprintFactory.createSprint('review', 1, 'sprint1', new Date(), new Date(1-1-2024), scrumMaster, new Report(1, new PngReportBehaviour()))

        reviewSprint.report.setEffortPoints("203");
        reviewSprint.report.setHeader("logo", "project X", "Cool business", 1, new Date());
        reviewSprint.report.setFooter("logo", "project X", "Cool business", 1, new Date());
        reviewSprint.report.setTeamComposition("a lot of teammembers");

        reviewSprint.generateReport();

        expect(console.log).toBeCalledWith('Sprint report has been created! - png');
    });
});