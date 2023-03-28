import { PipelineAction } from "../pipelineAction";
import { PipelineVisitor } from "../pipelineVisitor";

export class BuildAction implements PipelineAction{
    constructor(public name: string, public buildTool : string){}

    accept(visitor: PipelineVisitor): void {
        visitor.visitBuild(this);
    }
}