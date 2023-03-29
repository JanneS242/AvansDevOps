import { Command } from "./command";
import { Folder } from "./folder";
import { Visitor } from "./visitor";

export class Dryrun extends Visitor{
    public visitCommand(command: Command) {
        //No action
    }
    public visitFolder(map: Folder) {
        //No action
    }
    
}