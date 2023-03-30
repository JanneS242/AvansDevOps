import { BacklogItem } from "../src/models/backlogItem";
import { Forum } from "../src/models/forum";
import { Message } from "../src/models/message";
import { Developer } from "../src/models/users/developer";
import { ScrumMaster } from "../src/models/users/scrumMaster";
import { EmailAdapter } from "../src/observer/adapter/emailAdapter";
import { EmailNotification } from "../src/observer/emailNotification";
import { PdfReportBehaviour } from "../src/report/pdfReportBehaviour";
import { Report } from "../src/report/report";
import { ReviewSprint } from "../src/sprint/reviewSprint";

describe("Forum tests", () => {
    let scrumMaster: ScrumMaster;

    let developer: Developer;


    beforeAll(() => {
        jest.spyOn(global.console, 'error').mockImplementation(() => {});
        jest.spyOn(global.console, 'log').mockImplementation(() => {});
    });


      

    beforeEach(() => {
        scrumMaster = new ScrumMaster("Janne", "Sterk", new Date(2001,1,1), "j.sterk@avans.nl", "066223432");;
        developer = new Developer("Janne", "Sterk", new Date(2001,1,1), "j.sterk@avans.nl", "066223432");;

    });

    afterEach(() =>{
        jest.spyOn(global.console, 'log').mockClear();
        jest.spyOn(global.console, 'error').mockClear();
    });


    it("Make a thread for a backlogitem", () =>{
        const reviewSprint = new ReviewSprint(1, 'sprint1', new Date(), new Date(2024,1,1), scrumMaster, new Report(1, new PdfReportBehaviour()));
        const item = new BacklogItem("Difficult item", "When everything is in place", developer, reviewSprint);

        const forum = new Forum(item);

        expect(forum).toBeDefined();
    });

    it("Add a message to a thread", () => {
        const reviewSprint = new ReviewSprint(1, 'sprint1', new Date(), new Date(2024,1,1), scrumMaster, new Report(1, new PdfReportBehaviour()));
        const item = new BacklogItem("Difficult item", "When everything is in place", developer, reviewSprint);

        const message = new Message("I got an edit", "Something is not right", item.developer);

        const forum = new Forum(item);
        forum.addMessage(message);

        expect(forum.messages).toContain(message);
    });

    it("Get a notification when there is a new message added to the thread", () => {
        const reviewSprint = new ReviewSprint(1, 'sprint1', new Date(), new Date(2024,1,1), scrumMaster, new Report(1, new PdfReportBehaviour()));
        const item = new BacklogItem("Difficult item", "When everything is in place", developer, reviewSprint);

        const message = new Message("I got an edit", "Something is not right", item.developer);

        developer.addNotificationType(new EmailNotification(developer.email, new EmailAdapter()));

        const forum = new Forum(item);
        forum.addSubscriber(developer);
        forum.addMessage(message);

        expect(console.log).toBeCalledWith(`Send email to ${developer.email}`);
    });
});