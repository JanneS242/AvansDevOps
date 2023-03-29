import { Report } from "../report/report";
import { ScrumMaster } from "../models/users/scrumMaster";
import { User } from "../models/users/user";

export abstract class Sprint {
    public sprintNr : number;
    public title: String;
    public startDate: Date;
    public endDate: Date;
    
    public scrumMaster : ScrumMaster;
    public teamMembers : Array<User>;

    public constructor(
            sprintNr : number,
            title : String, 
            startDate : Date, 
            endDate : Date, 
            public report : Report,
            scrumMaster : ScrumMaster
        ){
            this.sprintNr = sprintNr;
            this.title = title;
            this.startDate = startDate;
            this.endDate = endDate;

            this.scrumMaster = scrumMaster;

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

    public generateReport(){
        this.report.generateReport();
    }

}