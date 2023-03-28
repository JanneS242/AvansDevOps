import { PipelineAction } from "../pipelineAction";
import { PipelineVisitor } from "../pipelineVisitor";

export class PackageAction implements PipelineAction{
    constructor(public name: string, public packageName : string){}

    accept(visitor: PipelineVisitor): void {
        visitor.visitPackage(this);
    }
}