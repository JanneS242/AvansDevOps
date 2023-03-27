import { BacklogItem } from "./backlogItem";
import { Message } from "./message";

export class Forum{
    public issue : BacklogItem;
    public messages : Array<Message>;
    public subscribers : Array<ISubscriber>;

    constructor(issue : BacklogItem){
        this.issue = issue;
        this.messages = new Array<Message>;
        this.subscibers = new Array<ISubscriber>
    }
}