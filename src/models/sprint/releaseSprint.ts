import { BuildAction } from "../pipeline/actions/buildAction";
import { Pipeline } from "../pipeline/pipeline";
import { Sprint } from "../sprint/sprint";

export class ReleaseSprint extends Sprint{
    resultsGood : boolean = false;
    cancelled : boolean = !this.resultsGood;
        
    
    public startPipeline(): void {
        if(this.cancelled){
            console.log("Release sprint is cancelled");
            //notificatie naar SM
        } else{
            console.log("Starting pipeline for release sprint");
            const pipeline = new Pipeline();
            pipeline.addAction(new BuildAction("builder Name", "build tool"));

            //something with a visitor
        }
    }
}