import { SMSAdapter } from "./adapter/SMSAdapter";
import { INotification } from "./INotification";

export class SMSNotification implements INotification{
    private phoneNumber: string;
    private smsAdapter : SMSAdapter;

    constructor(phoneNumber: string, smsAdapter : SMSAdapter){
        this.phoneNumber = phoneNumber;
        this.smsAdapter = smsAdapter;
    }

    notify() {
        this.smsAdapter.sendSMS(this.phoneNumber);
    }
    
}