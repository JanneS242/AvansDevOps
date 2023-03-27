import { Activity } from "../models/activity";
import { BacklogItem } from "../models/backlogItem";
import { IState } from "./IState";
import { TestingState } from "./testingState";

export class ReadyForTestingState implements IState{
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
        throw new Error("Method is not possible");
    }
    testing(): void {
        this.item.changeState(new TestingState(this.item));
    }
    tested(): void {
        throw new Error("Method is not possible");
    }
    done(): void {
        throw new Error("Method is not possible");
    }
    
}