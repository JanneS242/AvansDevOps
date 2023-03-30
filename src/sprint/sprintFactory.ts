import { ScrumMaster } from "../models/users/scrumMaster";
import { Report } from "../report/report";
import { ReleaseSprint } from "./releaseSprint";
import { ReviewSprint } from "./reviewSprint";

export class SprintFactory{
    createSprint(type: string, sprintNr : number, title : string, startDate : Date, endDate : Date, scrumMaster : ScrumMaster, report : Report){
        switch(type) {
            case 'review':
                return new ReviewSprint(sprintNr, title, startDate, endDate, scrumMaster, report );
            case 'release':
                return new ReleaseSprint(sprintNr, title, startDate, endDate, scrumMaster, report);
            default:
                throw new Error(`Invalid sprint type: ${type}`);
        }
    }
}