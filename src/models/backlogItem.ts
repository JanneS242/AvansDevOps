import { User } from "./users/user";

export class BacklogItem {
    public title : string;
    public definitionOfDone : string;
    public developer : User;
    //activities?

    constructor(title : string, DoD : string, developer : User){
        this.title = title;
        this.definitionOfDone = DoD;
        this.developer = developer;
    }
}