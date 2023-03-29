import { Activity } from "../models/activity";
import { BacklogItem } from "../models/backlogItem";
import { Tester } from "../models/users/tester";
import { IState } from "./IState";
import { ReadyForTestingState } from "./readyForTestingState";

export class DoingState implements IState{
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
        //notificatie naar tester
        if(this.item instanceof BacklogItem){
            this.item.sprint.teamMembers.forEach(member => {
                if(member instanceof Tester){
                    member.notificationTypes.forEach(type => {
                        type.notify();
                    });
                }
            });
            
        }
        this.item.changeState(new ReadyForTestingState(this.item));
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