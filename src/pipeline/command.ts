import { Component } from "./component";
import { Visitor } from "./visitor";

export class Command extends Component{

    constructor(public commandLine : string){
        super();
    }
    
    public acceptVisitor(visitor: Visitor) {
        visitor.visitCommand(this);
    }
}