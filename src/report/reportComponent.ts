export class ReportComponent{

    constructor(public logo : string, public projectName : string, public businessName : string, public version : number, public date : Date){}

    public toString() : string{
        return `${this.logo} ${this.businessName} \n projectName: ${this.projectName}, version: ${this.version}, date: ${this.date}`;
    }
}