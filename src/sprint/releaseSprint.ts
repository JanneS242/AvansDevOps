import { ExecuteVisitor } from "../pipeline/executeVisitor";
import { ScrumMaster } from "../models/users/scrumMaster";
import { Sprint } from "./sprint";

export class ReleaseSprint extends Sprint{
    resultsGood : boolean = false;
    cancelled : boolean = !this.resultsGood;
        
    
    public startPipeline(): void {
        if(this.cancelled){
            console.log("Release sprint is cancelled");
            //notificatie naar SM
            this.teamMembers.forEach(member =>{
                if(member instanceof ScrumMaster){
                    member.notificationTypes.forEach(type => {
                        type.notify();
                    });
                }
            });
        } else{
            console.log("Starting pipeline for release sprint");
            
            if(this.pipeline != null){
                const executeVisitor = new ExecuteVisitor();
                this.pipeline.accept(executeVisitor);
            }
        }
    }
}