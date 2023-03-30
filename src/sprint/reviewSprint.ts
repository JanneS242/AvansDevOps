import { ExecuteVisitor } from "../pipeline/executeVisitor";
import { Sprint } from "./sprint";

export class ReviewSprint extends Sprint{
    
    summaryUploaded: boolean = false;

    public uploadSummary(){
        this.summaryUploaded = true;
    }

    public successfullSprint(): void {
        throw new Error("Method has no consequence for a ReviewSprint");
    }

    private isDateBeforeToday(date : Date) {
        return new Date(date.toDateString()) < new Date(new Date().toDateString());
    }
      
    public startPipeline(): void {
        if(this.isDateBeforeToday(this.endDate)){
            this.finished = true;
            console.log("End date has already expired");
        } else{
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

}