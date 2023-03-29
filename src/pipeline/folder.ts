import { CompositeComponent } from "./compositeComponent";
import { Visitor } from "./visitor";

export class Folder extends CompositeComponent{
    
    constructor(title : string){
        super(title);
    }

    public acceptVisitor(visitor: Visitor): void {
        visitor.visitFolder(this);
        super.acceptVisitor(visitor);
    }
}