import { Report } from "../../report/report";
import { ReportBehaviour } from "../../report/reportBehaviour";
import { BacklogItem } from "../backlogItem";
import { Pipeline } from "../pipeline/pipeline";
import { ProductOwner } from "../users/productOwner";
import { ScrumMaster } from "../users/scrumMaster";
import { User } from "../users/user";

export abstract class Sprint {
    public sprintNr : number;
    public title: String;
    public startDate: Date;
    public endDate: Date;
    
    public scrumMaster : User;
    public productBacklog : Array<BacklogItem>;
    public productOwner : User;
    public teamMembers : Array<User>;

    public constructor(
            sprintNr : number,
            title : String, 
            startDate : Date, 
            endDate : Date, 
            scrumMaster : ScrumMaster, 
            productOwner : ProductOwner, 
            public report : Report
        ){
            this.sprintNr = sprintNr;
            this.title = title;
            this.startDate = startDate;
            this.endDate = endDate;
            this.scrumMaster = scrumMaster;
            this.productOwner = productOwner;

            this.productBacklog = new Array<BacklogItem>;
            this.teamMembers = new Array<User>;
    }

    public abstract startPipeline(): void;

    public addBacklogItemToList(backlogItem : BacklogItem){
        this.productBacklog.push(backlogItem);
    }

    public addTeamMember(member : User){
        this.teamMembers.push(member);
    }

    public setReport(report: Report){
        this.report = report;
    }
}