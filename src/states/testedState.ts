import { Activity } from "../models/activity";
import { BacklogItem } from "../models/backlogItem";
import { DoneState } from "./doneState";
import { IState } from "./IState";
import { ReadyForTestingState } from "./readyForTestingState";
import { ToDoState } from "./toDoState";

export class TestedState implements IState{
    private item : BacklogItem | Activity;

    public constructor(item : BacklogItem | Activity){
        this.item = item;
    }
    
    todo(): void {
        this.item.changeState(new ToDoState(this.item));
        // + notificatie naar scrum master
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
        this.item.changeState(new DoneState(this.item));
    }
    
}