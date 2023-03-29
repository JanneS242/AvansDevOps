import { IState } from "../states/IState";
import { ToDoState } from "../states/toDoState";

export class Activity{
    public title : string;
    public definitionOfDone : string;
    public currentState : IState;

    constructor(title : string, doD : string){
        this.title = title;
        this.definitionOfDone = doD;
        this.currentState = new ToDoState(this);
    }

    public changeState(state : IState) : void 
    {
        this.currentState = state;
    }
}