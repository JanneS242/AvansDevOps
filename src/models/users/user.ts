import { INotification } from "../../observer/INotification";

export abstract class User{
    private firstName : string;
    private lastName : string;
    private dateOfBirth: Date;
    public email : string;
    public phoneNumber : string;

    public notificationTypes: Array<INotification>

    public constructor(firstName: string, lastName : string, dateOfBirth: Date, email : string, phoneNumber : string){
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

    public getFullName() : string{
        return this.firstName + " " + this.lastName;
    }

    public getDateOfBirth() : Date{
        return this.dateOfBirth;
    }
}