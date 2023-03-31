import { Component } from "./component";
import { Visitor } from "./visitor";

export abstract class CompositeComponent extends Component{
    public components : Array<Component>
    private title : string;

    constructor(title : string){
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