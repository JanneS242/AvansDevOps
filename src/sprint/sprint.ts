import { INotification } from "../observer/INotification";
import { Report } from "../report/report";
import { ReportBehaviour } from "../report/reportBehaviour";
import { BacklogItem } from "../models/backlogItem";
import { Pipeline } from "../models/pipeline/pipeline";
import { ProductOwner } from "../models/users/productOwner";
import { ScrumMaster } from "../models/users/scrumMaster";
import { User } from "../models/users/user";
import { SprintBacklog } from "./sprintBacklog";

export abstract class Sprint {
    public sprintNr : number;
    public title: String;
    public startDate: Date;
    public endDate: Date;
    // public sprintBacklog : SprintBacklog;
    
    public teamMembers : Array<User>;

    public constructor(
            sprintNr : number,
            title : String, 
            startDate : Date, 
            endDate : Date, 
            public report : Report
        ){
            this.sprintNr = sprintNr;
            this.title = title;
            this.startDate = startDate;
            this.endDate = endDate;

            // this.sprintBacklog = new SprintBacklog(this);

            //this.productBacklog = new Array<BacklogItem>;
            this.teamMembers = new Array<User>;
            
    }

    public abstract startPipeline(): void;

    public addTeamMember(member : User){
        this.teamMembers.push(member);
    }

    public setReport(report: Report){
        this.report = report;
    }


}