import { BacklogItem } from "../models/backlogItem";
import { IState } from "./IState";
import { ReadyForTestingState } from "./readyForTestingState";

export class DoingState implements IState{
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
        this.backlogItem.changeState(new ReadyForTestingState(this.backlogItem));
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