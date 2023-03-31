import { Sprint } from "../sprint/sprint";

export class Project{
    private projectName : string;
    public sprints : Array<Sprint>;

    constructor(projectName : string){
        this.projectName = projectName;
        this.sprints = new Array<Sprint>;
    }

    addSprint(s : Sprint){
        this.sprints.push(s);
    }
}