import { IState } from "../states/IState";
import { ToDoState } from "../states/toDoState";

export class Activity{
    public title : String;
    public definitionOfDone : String;
    public currentState : IState;

    constructor(title : String, doD : String){
        this.title = title;
        this.definitionOfDone = doD;
        this.currentState = new ToDoState(this);
    }

    public changeState(state : IState) : void 
    {
        this.currentState = state;
    }
}