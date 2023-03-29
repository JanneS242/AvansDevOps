import { CompositeComponent } from "./compositeComponent";

export class Pipeline{
    jobs : Array<CompositeComponent>;

    constructor(){
        this.jobs = new Array<CompositeComponent>;
    }
}