import { Command } from "./command";
import { Folder } from "./folder";

export abstract class Visitor{
    public abstract visitCommand(command : Command) : any;
    public abstract visitFolder(map : Folder) : any;
}