import { Report } from "../report/report";
import { ReleaseSprint } from "./releaseSprint";
import { ReviewSprint } from "./reviewSprint";

export class SprintFactory{
    createSprint(type: string, sprintNr : number, title : string, startDate : Date, endDate : Date, report : Report){
        switch(type) {
            case 'review':
                return new ReviewSprint(sprintNr, title, startDate, endDate, report);
            case 'release':
                return new ReleaseSprint(sprintNr, title, startDate, endDate, report);
            default:
                throw new Error(`Invalid sprint type: ${type}`);
        }
    }
}

//Use of SprintFactory
// const reviewSprint = SprintFactory.createSprint("Sprint 1", new Date("2023-03-01"), new Date("2023-03-14"), true);
// reviewSprint.startPipeline(); // logs "Starting pipeline for review sprint Sprint 1"

// const releaseSprint = SprintFactory.createSprint("Sprint 2", new Date("2023-03-15"), new Date("2023-03-28"), false);
// releaseSprint.startPipeline(); // logs "Release sprint Sprint 2 cancelled due to bad results"