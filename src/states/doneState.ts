import { BacklogItem } from "../models/backlogItem";
import { IState } from "./IState";
import { ToDoState } from "./toDoState";

export class DoneState implements IState{
    private backlogItem : BacklogItem;

    public constructor(item : BacklogItem){
        this.backlogItem = item;
    }
    
    todo(): void {
        this.backlogItem.changeState(new ToDoState(this.backlogItem));
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
        throw new Error("Method is not possible");
    }
    done(): void {
        throw new Error("Method is not possible");
    }
    
}