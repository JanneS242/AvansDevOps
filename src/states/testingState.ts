import { BacklogItem } from "../models/backlogItem";
import { IState } from "./IState";
import { TestedState } from "./testedState";

export class TestingState implements IState{
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
        throw new Error("Method is not possible");
    }
    tested(): void {
        this.backlogItem.changeState(new TestedState(this.backlogItem));
    }
    done(): void {
        throw new Error("Method is not possible");
    }
    
}