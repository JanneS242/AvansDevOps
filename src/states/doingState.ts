import { Activity } from "../models/activity";
import { BacklogItem } from "../models/backlogItem";
import { IState } from "./IState";
import { ReadyForTestingState } from "./readyForTestingState";

export class DoingState implements IState{
    private item : BacklogItem | Activity;

    public constructor(item : BacklogItem | Activity){
        this.item = item;
    }
    
    todo(): void {
        throw new Error("Method is not possible");
    }
    doing(): void {
        throw new Error("Method is not possible");
    }
    readyForTesting(): void {
        this.item.changeState(new ReadyForTestingState(this.item));
    }
    testing(): void {
        throw new Error("Method is not possible");
    }
    tested(): void {
        throw new Error("Method is not possible");
    }
    done(): void {
        throw new Error("Method is not possible");
    }
    
}