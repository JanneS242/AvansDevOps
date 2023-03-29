import { DoneState } from "../states/doneState";
import { BacklogItem } from "./backlogItem";
import { Message } from "./message";
import { User } from "./users/user";

export class Forum{
    public issue : BacklogItem;
    public messages : Array<Message>;
    public subscribers : Array<User>;

    constructor(issue : BacklogItem){
        this.issue = issue;
        this.messages = new Array<Message>;
        this.subscribers = new Array<User>
    }

    addSubscriber(user : User){
        this.subscribers.push(user);
    }

    addMessage(m : Message){
        if(this.issue.currentState instanceof DoneState){
            console.log("This issue is done. There can be no reaction anymore");
        } else {
            this.messages.push(m);
            this.subscribers.forEach(user => {
                user.notificationTypes.forEach(type => {
                    type.notify();
                });
            });
        }
        
    }
}