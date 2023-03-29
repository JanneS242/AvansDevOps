import { ExecuteVisitor } from "../pipeline/executeVisitor";
import { Sprint } from "./sprint";

export class ReviewSprint extends Sprint{
    summaryUploaded: boolean = false;

    public uploadSummary(){
        this.summaryUploaded = true;
    }
    
    public startPipeline(): void {
        if(this.summaryUploaded){
            console.log("Starting pipeline for reviewSprint");
            
            if(this.pipeline != null){
                const executeVisitor = new ExecuteVisitor();
                this.pipeline.accept(executeVisitor);
            }
        } else {
            console.log("Cannot start pipeline because there is no summaryUploaded")
        }
    }    

}