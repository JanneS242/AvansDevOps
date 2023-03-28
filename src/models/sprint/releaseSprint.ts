import { BacklogItem } from "../backlogItem";
import { Sprint } from "../sprint/sprint";

export class ReleaseSprint extends Sprint{
    public finish(): void {
        throw new Error("Method not implemented.");
    }
    
    
    //release logic here
}