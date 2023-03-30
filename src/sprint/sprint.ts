import { Report } from "../report/report";
import { ScrumMaster } from "../models/users/scrumMaster";
import { User } from "../models/users/user";
import { Pipeline } from "../pipeline/pipeline";

export abstract class Sprint {
    public sprintNr : number;
    public title: string;
    public startDate: Date;
    public endDate: Date;
    public pipeline? : Pipeline;
    public finished : boolean = false;
    public closedForChanges : boolean = false;
    public report : Report;
    
    public scrumMaster : ScrumMaster;
    public teamMembers : Array<User>;

    public constructor(
            sprintNr : number,
            title : string, 
            startDate : Date, 
            endDate : Date, 
            scrumMaster : ScrumMaster,
            report : Report
        ){
            this.sprintNr = sprintNr;
            this.title = title;
            this.startDate = startDate;
            this.endDate = endDate;

            this.scrumMaster = scrumMaster;
            this.report = report;

            this.teamMembers = new Array<User>;
            
    }

    public abstract startPipeline(): void;
    public abstract successfullSprint() : void;
    public abstract uploadSummary() : void;


    public addTeamMember(member : User){
        if(!this.closedForChanges){
            this.teamMembers.push(member);
        }
        
    }

    public setReport(report: Report){
        if(!this.closedForChanges){
            this.report = report;
        }
    }

    public generateReport(){
        if(!this.closedForChanges){
            this.report.generateReport();
        }
    }

    public setPipeline(pipeline : Pipeline){
        pipeline.sprint = this;
        
        this.pipeline = pipeline;
    }


}