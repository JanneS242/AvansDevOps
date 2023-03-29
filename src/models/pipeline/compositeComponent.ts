import { Component } from "./component";
import { Visitor } from "./visitor";

export abstract class CompositeComponent extends Component{
    components : Array<Component>
    title : String;

    constructor(title : String){
        super();
        this.title = title;
        this.components = new Array<Component>;
    }

    public addComponent(c : Component){
        this.components.push(c);
    }

    public acceptVisitor(visitor : Visitor){
        this.components.forEach(c => {
            c.acceptVisitor(visitor);
        });
    }
}