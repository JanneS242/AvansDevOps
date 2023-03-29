import { Pipeline } from "../models/pipeline/pipeline";
import { Sprint } from "./sprint";

export class ReviewSprint extends Sprint{
    summaryUploaded: boolean = false;

    public uploadSummary(){
        this.summaryUploaded = true;
    }

    
    public startPipeline(): void {
        if(this.summaryUploaded){
            console.log("Starting pipeline for reviewSprint");
            
            // const pipeline = new Pipeline();
            // pipeline.addAction(new BuildAction("builder Name", "build tool"));

            //something with a visitor
        } else {
            console.log("Cannot start pipeline because there is no summaryUploaded")
        }
    }    

}