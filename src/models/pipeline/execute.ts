import { Command } from "./command";
import { Folder } from "./folder";
import { Visitor } from "./visitor";

export class Execute extends Visitor {
    public visitCommand(command: Command) {
        throw new Error("Method not implemented.");
    }
    public visitFolder(map: Folder) {
        throw new Error("Method not implemented.");
    }
    
}