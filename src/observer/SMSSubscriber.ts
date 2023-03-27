import { User } from "../models/users/user";
import { SMSAdapter } from "./adapter/SMSAdapter";
import { ISubscriber } from "./ISubscriber";

export class SMSSubscriber implements ISubscriber{
    user: User;
    smsAdapter : SMSAdapter;

    constructor(user : User, smsAdapter : SMSAdapter){
        this.user = user;
        this.smsAdapter = smsAdapter;
    }

    notifyAll() {
        throw new Error("Method not implemented.");
    }
    
}