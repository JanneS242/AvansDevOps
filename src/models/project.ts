import { Sprint } from "../sprint/sprint";

export class Project{
    projectName : String;
    sprints : Array<Sprint>;

    constructor(projectName : String){
        this.projectName = projectName;
        this.sprints = new Array<Sprint>;
    }

    addSprint(s : Sprint){
        this.sprints.push(s);
    }
}