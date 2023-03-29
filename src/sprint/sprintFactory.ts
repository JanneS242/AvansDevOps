import { ScrumMaster } from "../models/users/scrumMaster";
import { Report } from "../report/report";
import { ReleaseSprint } from "./releaseSprint";
import { ReviewSprint } from "./reviewSprint";

export class SprintFactory{
    createSprint(type: string, sprintNr : number, title : string, startDate : Date, endDate : Date, report : Report, scrumMaster : ScrumMaster){
        switch(type) {
            case 'review':
                return new ReviewSprint(sprintNr, title, startDate, endDate, report, scrumMaster );
            case 'release':
                return new ReleaseSprint(sprintNr, title, startDate, endDate, report, scrumMaster);
            default:
                throw new Error(`Invalid sprint type: ${type}`);
        }
    }
}