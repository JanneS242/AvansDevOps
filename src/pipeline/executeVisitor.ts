import { Command } from "./command";
import { CompositeComponent } from "./compositeComponent";
import { Folder } from "./folder";
import { Pipeline } from "./pipeline";
import { PipelineStatus } from "./pipelineStatus";
import { Visitor } from "./visitor";

export class ExecuteVisitor extends Visitor {
    
    private jobCount : number = 0;
    
    private incrementJobCount(){ this.jobCount++}

    public visitPipeline(pipeline: Pipeline) {
        pipeline.pipelineStatus = PipelineStatus.InProgress;
        pipeline.closeSprint();
        try{
            pipeline.jobs.forEach(item => {
                item.acceptVisitor(this);
            });
            pipeline.pipelineStatus = PipelineStatus.Succeeded;
            pipeline.notifyWhenSucces();
            pipeline.finishSprint();
        } catch {
            pipeline.pipelineStatus = PipelineStatus.Failed;
            pipeline.notifyScrumMasterWhenFailed();
        }
    }

    public visitComponents(component: CompositeComponent) {
        this.incrementJobCount();
        component.components.forEach(item => {
            item.acceptVisitor(this);
        });
    }

    public visitCommand(command: Command) {
        this.incrementJobCount();
    }

    public visitFolder(folder: Folder) {
        this.incrementJobCount();
    }
    
}