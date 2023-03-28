import { PipelineAction } from "../pipelineAction";
import { PipelineVisitor } from "../pipelineVisitor";

export class AnalyzeAction implements PipelineAction{
    constructor(
        public name: string,
        public analysisTool : string,
        public preparationAction : string,
        public executionAction: string,
        public reportingAction: string
    ){}

    accept(visitor: PipelineVisitor): void {
        visitor.visitAnalyze(this);
    }
}