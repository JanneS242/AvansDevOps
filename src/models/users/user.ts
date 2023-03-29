import { INotification } from "../../observer/INotification";

export abstract class User{
    public firstName : String;
    public lastName : String;
    public dateOfBirth: Date;
    public email : String;
    public phoneNumber : String;

    public notificationTypes: Array<INotification>

    public constructor(firstName: String, lastName : String, dateOfBirth: Date, email : String, phoneNumber : String){
        this.firstName = firstName;
        this.lastName = lastName;
        this.dateOfBirth = dateOfBirth;
        this.phoneNumber = phoneNumber;
        this.email = email;

        this.notificationTypes = new Array<INotification>;
    }

    public addNotificationType(type : INotification){
        this.notificationTypes.push(type);
    }

    public getFullName() : String{
        return this.firstName + " " + this.lastName;
    }

    public getDateOfBirth() : Date{
        return this.dateOfBirth;
    }
}