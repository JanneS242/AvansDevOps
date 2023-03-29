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
        //notificatie naar scrum master
        if(this.item instanceof BacklogItem){
            this.item.sprint.scrumMaster.notificationTypes.forEach(type => {
                type.notify();
            });   
        }
        this.item.changeState(new ToDoState(this.item));
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
        if(this.item instanceof BacklogItem ){
            if(this.item.checkStatesOfActivities()){
                this.item.changeState(new DoneState(this.item));
            } else{
                console.error("Not all acitivties are done");
            }
        } else{
            this.item.changeState(new DoneState(this.item));
        }
        
    }
    
}