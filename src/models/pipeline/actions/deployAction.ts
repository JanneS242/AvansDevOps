import { PipelineAction } from "../pipelineAction";
import { PipelineVisitor } from "../pipelineVisitor";

export class DeployAction implements PipelineAction{
    constructor(public name: string, public target: string){}

    accept(visitor: PipelineVisitor): void {
        visitor.visitDeploy(this);
    }
}