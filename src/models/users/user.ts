export abstract class User{
    public firstName : string;
    public lastName : string;
    public dateOfBirth: Date;

    public constructor(firstName: string, lastName : string, dateOfBirth: Date){
        this.firstName = firstName;
        this.lastName = lastName;
        this.dateOfBirth = dateOfBirth;
    }

    public getFullName() : String{
        return this.firstName + " " + this.lastName;
    }

    public getDateOfBirth() : Date{
        return this.dateOfBirth;
    }
}