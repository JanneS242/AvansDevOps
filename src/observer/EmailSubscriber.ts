import { User } from "../models/users/user";
import { EmailAdapter } from "./adapter/EmailAdapter";
import { ISubscriber } from "./ISubscriber";

export class EmailSubscriber implements ISubscriber{
    user: User;
    emailAdapter : EmailAdapter;

    constructor(user : User, emailAdapter : EmailAdapter){
        this.user = user;
        this.emailAdapter = emailAdapter;
    }

    notifyAll(){
        throw new Error("Method not implemented.");
    }
    
}