import { PipelineAction } from "../pipelineAction";
import { PipelineVisitor } from "../pipelineVisitor";

export class UtilityAction implements PipelineAction{
    constructor(public name: string, public utilityType : string, public utilityParams : string){}

    accept(visitor: PipelineVisitor): void {
        visitor.visitUtility(this);
    }
}