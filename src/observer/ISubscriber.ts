import { User } from "../models/users/user";

export interface ISubscriber{
    user : User;
    
    notifyAll() : any;
}