import { CompositeComponent } from "./compositeComponent";
import { Visitor } from "./visitor";

export class Folder extends CompositeComponent{
    
    constructor(title : String){
        super(title);
    }

    public acceptVisitor(visitor: Visitor): void {
        visitor.visitFolder(this);
        super.acceptVisitor(visitor);
    }
}