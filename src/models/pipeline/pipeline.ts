import { PipelineAction } from "./pipelineAction";
import { PipelineVisitor } from "./pipelineVisitor";

export class Pipeline implements PipelineAction{
    private actions: PipelineAction[] = [];
    
    addAction(action : PipelineAction){
        this.actions.push(action);
    }

    accept(visitor: PipelineVisitor){
        for(const action of this.actions){
            action.accept(visitor);
        }
    }
}