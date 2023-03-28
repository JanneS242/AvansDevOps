import { PipelineAction } from "../pipelineAction";
import { PipelineVisitor } from "../pipelineVisitor";

export class TestAction implements PipelineAction{
    constructor(public name: string, public testFramework: string, public publishResults : boolean, public publishCoverage : boolean){}

    accept(visitor: PipelineVisitor): void {
        visitor.visitTest(this);
    }
}