import { BacklogItem } from "../models/backlogItem";
import { IState } from "./IState";
import { TestingState } from "./testingState";

export class ReadyForTestingState implements IState{
    private backlogItem : BacklogItem;

    public constructor(item : BacklogItem){
        this.backlogItem = item;
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
        this.backlogItem.changeState(new TestingState(this.backlogItem));
    }
    tested(): void {
        throw new Error("Method is not possible");
    }
    done(): void {
        throw new Error("Method is not possible");
    }
    
}