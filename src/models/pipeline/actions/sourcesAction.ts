import { PipelineAction } from "../pipelineAction";
import { PipelineVisitor } from "../pipelineVisitor";

export class SourcesAction implements PipelineAction{
    constructor(public name : string, public source : string){}

    accept(visitor : PipelineVisitor){
        visitor.visitSources(this);
    }
}