import { User } from "./users/user";

export class Message{
    private title : string;
    private content : string;
    private author : User;

    constructor(title : string, content : string, author : User){
        this.title = title;
        this.content = content;
        this.author = author;
    }
}