import { Activity } from "../models/activity";
import { BacklogItem } from "../models/backlogItem";
import { IState } from "./IState";
import { ToDoState } from "./toDoState";

export class DoneState implements IState{
    private item : BacklogItem | Activity;

    public constructor(item : BacklogItem | Activity){
        this.item = item;
    }
    
    todo(): void {
        this.item.changeState(new ToDoState(this.item));
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