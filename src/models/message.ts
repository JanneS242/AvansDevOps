import { User } from "./users/user";

export class Message{
    public title : String;
    public content : String;
    public author : User;

    constructor(title : String, content : String, author : User){
        this.title = title;
        this.content = content;
        this.author = author;
    }
}