import { ReportBehaviour } from "../../report/reportBehaviour";
import { ProductOwner } from "../users/productOwner";
import { ScrumMaster } from "../users/scrumMaster";
import { ReleaseSprint } from "./releaseSprint";
import { ReviewSprint } from "./reviewSprint";

export class SprintFactory{
    createSprint(type: string, sprintNr : number, title : string, startDate : Date, endDate : Date, scrumMaster : ScrumMaster, reportGenerator : ReportBehaviour, productOwner : ProductOwner){
        switch(type) {
            case 'review':
                return new ReviewSprint(sprintNr, title, startDate, endDate, scrumMaster,reportGenerator, productOwner);
            case 'release':
                return new ReleaseSprint(sprintNr, title, startDate, endDate, scrumMaster,reportGenerator, productOwner);
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