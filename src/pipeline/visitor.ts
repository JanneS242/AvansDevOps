import { Command } from "./command";
import { CompositeComponent } from "./compositeComponent";
import { Folder } from "./folder";
import { Pipeline } from "./pipeline";

export abstract class Visitor{
    public abstract visitPipeline(pipeline : Pipeline): any;
    public abstract visitComponents(component : CompositeComponent) : any;
    public abstract visitCommand(command : Command) : any;
    public abstract visitFolder(folder : Folder) : any;
}