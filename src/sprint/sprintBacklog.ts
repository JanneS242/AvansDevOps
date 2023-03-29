import { BacklogItem } from "../models/backlogItem";
import { Sprint } from "./sprint";

export class SprintBacklog{
    // public sprint : Sprint;
    public productBacklog : Array<BacklogItem>

    constructor(public sprint : Sprint){
        this.productBacklog = new Array<BacklogItem>;
    }

    public setSprint(sprint : Sprint){
        this.sprint = sprint;
    }

    public addBacklogItemToList(backlogItem : BacklogItem){
        this.productBacklog.push(backlogItem);
    }
}