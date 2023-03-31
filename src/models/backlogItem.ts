import { Sprint } from "../sprint/sprint";
import { DoneState } from "../states/doneState";
import { IState } from "../states/IState";
import { ToDoState } from "../states/toDoState";
import { Activity } from "./activity";
import { Developer } from "./users/developer";
import { User } from "./users/user";

export class BacklogItem {
    public title : string;
    public definitionOfDone : string;
    public developer : User;
    public currentState : IState;
    public activities : Array<Activity>;

    public sprint : Sprint;

    constructor(title : string, DoD : string, developer : Developer, sprint : Sprint){
        this.title = title;
        this.definitionOfDone = DoD;
        this.developer = developer;
        this.currentState = new ToDoState(this);
        this.activities = new Array<Activity>;
        this.sprint = sprint;
    }

    public changeState(state : IState) : void 
    {
        this.currentState = state;
    }

    public addActivityToList(activity : Activity){
        this.activities.push(activity);
    }

    public checkStatesOfActivitiesAreDone() : boolean{
        //check if all activities are done -> false if NOT
        let notDoneActivities : Array<Activity> = new Array<Activity>;
        // let allDone : boolean = false;
        
        if(this.activities.length !== 0){
            this.activities.forEach(activity => {
                if(activity.currentState instanceof DoneState){
                    console.log(`Activity ${activity.title} -> done`);
                } else{
                    notDoneActivities.push(activity);
                }
            });
        }
        
        if(notDoneActivities.length !== 0){
            return false; //false if something is not on Done
        } else {
            return true; //true if everything is on Done
        }
    }
}