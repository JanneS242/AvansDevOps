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