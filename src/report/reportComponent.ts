export class ReportComponent{

    constructor(public logo : string, public projectName : string, public businessName : string, public version : number, public date : Date){

    }

    public toString() : string{
        return `${this.logo} ${this.businessName} \n projectName: ${this.projectName}, version: ${this.version}, date: ${this.date}`;
    }

    public setLogo(logo : string){
        this.logo = logo;
    }

    public setProjectName(name : string){
        this.projectName = name;
    }

    public setBusinessName(name : string){
        this.businessName = name;
    }

    public setVersion(version : number){
        this.version = version;
    }

    public setDate(date : Date){
        this.date = date;
    }

}