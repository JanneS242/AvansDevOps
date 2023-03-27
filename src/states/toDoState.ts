import { Activity } from "../models/activity";
import { BacklogItem } from "../models/backlogItem";
import { DoingState } from "./doingState";
import { IState } from "./IState";

export class ToDoState implements IState{
    private item : BacklogItem | Activity;

    public constructor(item : BacklogItem | Activity){
        this.item = item;
    }

    todo(): void {
        throw new Error("Method is not possible");
    }
    doing(): void {
        this.item.changeState(new DoingState(this.item));
    }
    readyForTesting(): void {
        throw new Error("Method is not possible");
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