import { EmailAdapter } from "./adapter/EmailAdapter";
import { INotification } from "./INotification";

export class EmailNotification implements INotification{
    private email: string;
    private emailAdapter : EmailAdapter;

    constructor(email : string, emailAdapter : EmailAdapter){
        this.email = email;
        this.emailAdapter = emailAdapter;
    }

    notify(){
        this.emailAdapter.sendEmail(this.email);
    }
    
}