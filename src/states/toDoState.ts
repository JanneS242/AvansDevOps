import { BacklogItem } from "../models/backlogItem";
import { DoingState } from "./doingState";
import { IState } from "./IState";

export class ToDoState implements IState{
    private backlogItem : BacklogItem;

    public constructor(item : BacklogItem){
        this.backlogItem = item;
    }

    todo(): void {
        throw new Error("Method is not possible");
    }
    doing(): void {
        this.backlogItem.changeState(new DoingState(this.backlogItem));
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