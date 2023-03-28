import { ReportBehaviour } from "../../report/reportBehaviour";
import { BacklogItem } from "../backlogItem";
import { ProductOwner } from "../users/productOwner";
import { ScrumMaster } from "../users/scrumMaster";
import { User } from "../users/user";

export abstract class Sprint {
    private sprintNr : number;
    private title: string;
    private startDate: Date;
    private endDate: Date;
    
    public reportGenerator : ReportBehaviour;
    public scrumMaster : User;
    public productBacklog : Array<BacklogItem>;
    public productOwner : User;

    public constructor(sprintNr : number, title : string, startDate : Date, endDate : Date, scrumMaster : ScrumMaster, reportGenerator : ReportBehaviour, productOwner : ProductOwner){
        this.sprintNr = sprintNr;
        this.title = title;
        this.startDate = startDate;
        this.endDate = endDate;
        this.scrumMaster = scrumMaster;
        this.reportGenerator = reportGenerator;
        this.productOwner = productOwner;

        this.productBacklog = new Array<BacklogItem>;
    }

    public abstract finish(): void;

    public addBacklogItemToList(backlogItem : BacklogItem){
        this.productBacklog.push(backlogItem);
    }
}