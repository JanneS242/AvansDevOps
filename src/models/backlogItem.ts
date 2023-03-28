import { DoneState } from "../states/doneState";
import { IState } from "../states/IState";
import { ToDoState } from "../states/toDoState";
import { Activity } from "./activity";
import { User } from "./users/user";

export class BacklogItem {
    public title : string;
    public definitionOfDone : string;
    public developer : User;
    public currentState : IState;
    public activities : Array<Activity>;

    constructor(title : string, DoD : string, developer : User){
        this.title = title;
        this.definitionOfDone = DoD;
        this.developer = developer;
        this.currentState = new ToDoState(this);
        this.activities = new Array<Activity>;
    }

    public changeState(state : IState) : void 
    {
        this.currentState = state;
    }

    public addActivityToList(activity : Activity){
        this.activities.push(activity);
    }

    public checkStatesOfActivities() : boolean{
        //check if all activities are done -> false if NOT
        let allDone : boolean = false;
        
        this.activities.forEach(activity => {
            if(activity.currentState instanceof DoneState){
                allDone = true;
            } 
        });

        return allDone;
    }
}