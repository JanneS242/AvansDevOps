import { Component } from "./component";
import { Visitor } from "./visitor";

export class Command extends Component{
    constructor(public commandLine : String){
        super();
    }
    
    public acceptVisitor(visitor: Visitor) {
        visitor.visitCommand(this);
    }

}