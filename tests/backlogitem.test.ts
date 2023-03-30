import { Activity } from "../src/models/activity";
import { BacklogItem } from "../src/models/backlogItem";
import { Project } from "../src/models/project";
import { Developer } from "../src/models/users/developer";
import { ScrumMaster } from "../src/models/users/scrumMaster";
import { Tester } from "../src/models/users/tester";
import { SMSAdapter } from "../src/observer/adapter/SMSAdapter";
import { SMSNotification } from "../src/observer/SMSNotification";
import { PdfReportBehaviour } from "../src/report/pdfReportBehaviour";
import { Report } from "../src/report/report";
import { SprintFactory } from "../src/sprint/sprintFactory";
import { DoingState } from "../src/states/doingState";
import { DoneState } from "../src/states/doneState";
import { ReadyForTestingState } from "../src/states/readyForTestingState";
import { TestedState } from "../src/states/testedState";
import { TestingState } from "../src/states/testingState";
import { ToDoState } from "../src/states/toDoState";

describe("BacklogItem and Activity tests", () => {
    let scrumMaster: ScrumMaster;

    let tester: Tester;

    let developer: Developer;


    beforeAll(() => {
        jest.spyOn(global.console, 'error').mockImplementation(() => {});
        jest.spyOn(global.console, 'log').mockImplementation(() => {});
    });
      

    beforeEach(() => {
        scrumMaster = new ScrumMaster("Janne", "Sterk", new Date(2001,1,1), "j.sterk@avans.nl", "066223432");;

        tester = new Tester("Janne", "Sterk", new Date(2001,1,1), "j.sterk@avans.nl", "066223432");;

        developer = new Developer("Janne", "Sterk", new Date(2001,1,1), "j.sterk@avans.nl", "066223432");;

    });
    
    it("Create Sprint and BacklogItem and the state of the BacklogItem has to be ToDoState", () => {
        const sprintFactory = new SprintFactory();
        const reviewSprint = sprintFactory.createSprint('review', 1, 'sprint1', new Date(), new Date(2024,1,1), scrumMaster, new Report(1, new PdfReportBehaviour()))
        
        const item = new BacklogItem("Difficult item", "When everything is in place", developer, reviewSprint);

        expect(item.currentState).toBeInstanceOf(ToDoState);
    });

    it("Create activity and add to backlogitem and the state of the activity has to be ToDoState", () => {
        const sprintFactory = new SprintFactory();
        const reviewSprint = sprintFactory.createSprint('review', 1, 'sprint1', new Date(), new Date(2024,1,1), scrumMaster, new Report(1, new PdfReportBehaviour()))
        
        const item = new BacklogItem("Difficult item", "When everything is in place", developer, reviewSprint);
        const activity = new Activity("Beautiful activity", "When everything is done right");

        item.addActivityToList(activity);

        expect(item.activities).toContain(activity);
        expect(activity.currentState).toBeInstanceOf(ToDoState);
    });

    it("Change the state of a backlogitem to DoingState", () => {
        const sprintFactory = new SprintFactory();
        const reviewSprint = sprintFactory.createSprint('review', 1, 'sprint1', new Date(), new Date(2024,1,1), scrumMaster, new Report(1, new PdfReportBehaviour()))
        
        const item = new BacklogItem("Difficult item", "When everything is in place", developer, reviewSprint);
        item.changeState(new DoingState(item));

        expect(item.currentState).toBeInstanceOf(DoingState);
    });
        
    it("The state of the backlogitem can only be done, if the state of all activities are done - succesful way", () => {
        const sprintFactory = new SprintFactory();
        const reviewSprint = sprintFactory.createSprint('review', 1, 'sprint1', new Date(), new Date(2024,1,1), scrumMaster, new Report(1, new PdfReportBehaviour()))
        
        const item = new BacklogItem("Difficult item", "When everything is in place", developer, reviewSprint);
        const activity = new Activity("Beautiful activity", "When everything is done right");

        item.addActivityToList(activity);
        activity.currentState.doing();
        activity.currentState.readyForTesting();
        activity.currentState.testing();
        activity.currentState.tested();
        activity.currentState.done();

        item.changeState(new DoingState(item));
        item.changeState(new ReadyForTestingState(item));
        item.changeState(new TestingState(item));
        item.changeState(new TestedState(item));
        item.changeState(new DoneState(item));

        expect(item.activities).toContain(activity);
        expect(activity.currentState).toBeInstanceOf(DoneState);

        expect(item.currentState).toBeInstanceOf(DoneState);
    });

    it("The state of the backlogitem can only be done, if the state of all activities are done - failed way", () => {
        const sprintFactory = new SprintFactory();
        const reviewSprint = sprintFactory.createSprint('review', 1, 'sprint1', new Date(), new Date(2024,1,1), scrumMaster, new Report(1, new PdfReportBehaviour()))
        
        const item = new BacklogItem("Difficult item", "When everything is in place", developer, reviewSprint);
        const activity = new Activity("Beautiful activity", "When everything is done right");

        item.addActivityToList(activity);
        activity.currentState.doing();
        activity.currentState.readyForTesting();
        activity.currentState.testing();

        item.currentState.doing();
        item.currentState.readyForTesting();
        item.currentState.testing();
        item.currentState.tested();
        item.currentState.done();

        expect(item.activities).toContain(activity);
        expect(activity.currentState).toBeInstanceOf(TestingState);

        expect(console.error).toBeCalledWith('Not all activities are done');
        expect(item.currentState).toBeInstanceOf(TestedState);
    });

    it("The status of an item can never go back to doing", () =>{
        const sprintFactory = new SprintFactory();
        const reviewSprint = sprintFactory.createSprint('review', 1, 'sprint1', new Date(), new Date(2024,1,1), scrumMaster, new Report(1, new PdfReportBehaviour()))
        
        const item = new BacklogItem("Difficult item", "When everything is in place", developer, reviewSprint);

        item.currentState.doing();
        item.currentState.readyForTesting();
        item.currentState.testing();

        expect(() => {
            item.currentState.doing()
          }).toThrow(Error)

        expect(item.currentState).toBeInstanceOf(TestingState);
    });

    it("Tester receives an notification when the backlogitem is ready for testing", () =>{
        const sprintFactory = new SprintFactory();
        const reviewSprint = sprintFactory.createSprint('review', 1, 'sprint1', new Date(), new Date(2024,1,1), scrumMaster, new Report(1, new PdfReportBehaviour()))
        
        const item = new BacklogItem("Difficult item", "When everything is in place", developer, reviewSprint);

        reviewSprint.addTeamMember(tester);
        reviewSprint.addTeamMember(developer);

        tester.addNotificationType(new SMSNotification(tester.phoneNumber, new SMSAdapter()));

        item.currentState.doing();
        item.currentState.readyForTesting();

        expect(tester.notificationTypes.every(n => n.notify)).toBeTruthy();
        expect(console.log).toBeCalledWith(`Send SMS to the following number: ${tester.phoneNumber}`);
        expect(item.currentState).toBeInstanceOf(ReadyForTestingState);
    });

    it("Change the state of a backlogitem from Tested to ToDo and the scrummaster gets a notification", () =>{
        const sprintFactory = new SprintFactory();
        const reviewSprint = sprintFactory.createSprint('review', 1, 'sprint1', new Date(), new Date(2024,1,1), scrumMaster, new Report(1, new PdfReportBehaviour()))
        
        const item = new BacklogItem("Difficult item", "When everything is in place", developer, reviewSprint);

        scrumMaster.addNotificationType(new SMSNotification(scrumMaster.phoneNumber, new SMSAdapter()));

        item.currentState.doing();
        item.currentState.readyForTesting();
        item.currentState.testing();
        item.currentState.tested();
        item.currentState.todo();

        expect(scrumMaster.notificationTypes.every(n => n.notify)).toBeTruthy();
        expect(console.log).toBeCalledWith(`Send SMS to the following number: ${scrumMaster.phoneNumber}`);
        expect(item.currentState).toBeInstanceOf(ToDoState);
    });

    it("Change the state of a backlogitem from Tested to ReadyForTesting", () =>{
        const sprintFactory = new SprintFactory();
        const reviewSprint = sprintFactory.createSprint('review', 1, 'sprint1', new Date(), new Date(2024,1,1), scrumMaster, new Report(1, new PdfReportBehaviour()))
        
        const item = new BacklogItem("Difficult item", "When everything is in place", developer, reviewSprint);

        item.currentState.doing();
        item.currentState.readyForTesting();
        item.currentState.testing();
        item.currentState.tested();
        item.currentState.readyForTesting();

        expect(item.currentState).toBeInstanceOf(ReadyForTestingState);
    });

    it("Add sprint to project", () =>{
        const project = new Project('Project name');
        const sprintFactory = new SprintFactory();
        const reviewSprint = sprintFactory.createSprint('review', 1, 'sprint1', new Date(), new Date(2024,1,1), scrumMaster, new Report(1, new PdfReportBehaviour()))
        
        project.addSprint(reviewSprint);

        expect(project.sprints).toContain(reviewSprint);
    });

    it("Change the state of a backlogitem from Done to ToDo", () =>{
        const sprintFactory = new SprintFactory();
        const reviewSprint = sprintFactory.createSprint('review', 1, 'sprint1', new Date(), new Date(2024,1,1), scrumMaster, new Report(1, new PdfReportBehaviour()))
        
        const item = new BacklogItem("Difficult item", "When everything is in place", developer, reviewSprint);

        item.currentState.doing();
        item.currentState.readyForTesting();
        item.currentState.testing();
        item.currentState.tested();
        item.currentState.done();
        item.currentState.todo();

        expect(item.currentState).toBeInstanceOf(ToDoState);
    });

    it("The state can never go back to Doing", () =>{
        const sprintFactory = new SprintFactory();
        const reviewSprint = sprintFactory.createSprint('review', 1, 'sprint1', new Date(), new Date(2024,1,1), scrumMaster, new Report(1, new PdfReportBehaviour()))
        
        const item = new BacklogItem("Difficult item", "When everything is in place", developer, reviewSprint);

        item.currentState.doing();
        item.currentState.readyForTesting();
        item.currentState.testing();
        item.currentState.tested();

        expect(() => {
            item.currentState.doing()
          }).toThrow(Error)

        expect(item.currentState).toBeInstanceOf(TestedState);
    });

    it("Can't skip a step in the states - ReadyForTesting to Tested", () =>{
        const sprintFactory = new SprintFactory();
        const reviewSprint = sprintFactory.createSprint('review', 1, 'sprint1', new Date(), new Date(2024,1,1), scrumMaster, new Report(1, new PdfReportBehaviour()))
        
        const item = new BacklogItem("Difficult item", "When everything is in place", developer, reviewSprint);

        item.currentState.doing();
        item.currentState.readyForTesting();


        expect(() => {
            item.currentState.tested()
          }).toThrow(Error)

        expect(item.currentState).toBeInstanceOf(ReadyForTestingState);
    });

    it("Can't skip a step in the states - ToDo to Done", () =>{
        const sprintFactory = new SprintFactory();
        const reviewSprint = sprintFactory.createSprint('review', 1, 'sprint1', new Date(), new Date(2024,1,1), scrumMaster, new Report(1, new PdfReportBehaviour()))
        
        const item = new BacklogItem("Difficult item", "When everything is in place", developer, reviewSprint);


        expect(() => {
            item.currentState.tested()
          }).toThrow(Error)

        expect(item.currentState).toBeInstanceOf(ToDoState);
    });
})
    
