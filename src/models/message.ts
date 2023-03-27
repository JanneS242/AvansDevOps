import { User } from "./users/user";

export class Message{
    public title : string;
    public content : string;
    public author : User;

    constructor(title:string, content: string, author : User){
        this.title = title;
        this.content = content;
        this.author = author;
    }
}