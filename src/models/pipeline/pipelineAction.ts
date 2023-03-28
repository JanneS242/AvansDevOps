import { PipelineVisitor } from "./pipelineVisitor";

export interface PipelineAction{
    accept(visitor : PipelineVisitor): void;
}