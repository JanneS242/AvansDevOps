import { EmailAdapter } from "./adapter/emailAdapter";
import { INotification } from "./INotification";

export class EmailNotification implements INotification{
    email: String;
    emailAdapter : EmailAdapter;

    constructor(email : String, emailAdapter : EmailAdapter){
        this.email = email;
        this.emailAdapter = emailAdapter;
    }

    notify(){
        this.emailAdapter.sendEmail(this.email);
    }
    
}