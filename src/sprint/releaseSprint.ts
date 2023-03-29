import { BuildAction } from "../models/pipeline/actions/buildAction";
import { Pipeline } from "../models/pipeline/pipeline";
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
            const pipeline = new Pipeline();
            pipeline.addAction(new BuildAction("builder Name", "build tool"));

            //something with a visitor
        }
    }
}