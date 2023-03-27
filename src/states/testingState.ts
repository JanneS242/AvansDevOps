import { Activity } from "../models/activity";
import { BacklogItem } from "../models/backlogItem";
import { IState } from "./IState";
import { TestedState } from "./testedState";

export class TestingState implements IState{
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
        throw new Error("Method is not possible");
    }
    tested(): void {
        this.item.changeState(new TestedState(this.item));
    }
    done(): void {
        throw new Error("Method is not possible");
    }
    
}