export class ReportComponent{

    constructor(private logo : string, private projectName : string, private businessName : string, private version : number, private date : Date){}

    public toString() : string{
        return `${this.logo} ${this.businessName} \n projectName: ${this.projectName}, version: ${this.version}, date: ${this.date}`;
    }
}