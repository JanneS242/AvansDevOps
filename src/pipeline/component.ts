import { Visitor } from "./visitor";

export abstract class Component {
    public abstract acceptVisitor(visitor : Visitor) : any;
}