import { ReportBehaviour } from "../report/reportBehaviour";
import { BacklogItem } from "./backlogItem";
import { ScrumMaster } from "./users/scrumMaster";
import { User } from "./users/user";

export class Sprint {
    private sprintNr : number;
    private title: string;
    private startDate: Date;
    private endDate: Date;
    
    public reportGenerator : ReportBehaviour;
    public scrumMaster : User;
    public productBacklog : Array<BacklogItem>;

    public constructor(sprintNr : number, title : string, startDate : Date, endDate : Date, scrumMaster : ScrumMaster, reportGenerator : ReportBehaviour){
        this.sprintNr = sprintNr;
        this.title = title;
        this.startDate = startDate;
        this.endDate = endDate;
        this.scrumMaster = scrumMaster;
        this.reportGenerator = reportGenerator;

        this.productBacklog = new Array<BacklogItem>;
    }

    public addBacklogItemToList(backlogItem : BacklogItem){
        this.productBacklog.push(backlogItem);
    }

    // public removeBacklogItemFromList(){

    // }

    public getTitle(): string {
        return this.title;
    }
    public setTitle(value: string) {
        this.title = value;
    }

    public getStartDate(): Date {
        return this.startDate;
    }
    public setStartDate(value: Date) {
        this.startDate = value;
    }

    public getEndDate(): Date {
        return this.endDate;
    }
    public setEndDate(value: Date) {
        this.endDate = value;
    }


}