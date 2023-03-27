import { BacklogItem } from "../models/backlogItem";
import { DoneState } from "./doneState";
import { IState } from "./IState";
import { ReadyForTestingState } from "./readyForTestingState";
import { ToDoState } from "./toDoState";

export class TestedState implements IState{
    private backlogItem : BacklogItem;

    public constructor(item : BacklogItem){
        this.backlogItem = item;
    }
    
    todo(): void {
        this.backlogItem.changeState(new ToDoState(this.backlogItem));
        // + notificatie naar scrum master
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
        this.backlogItem.changeState(new DoneState(this.backlogItem));
    }
    
}