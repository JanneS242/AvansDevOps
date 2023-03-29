import { ReportBehaviour } from "./reportBehaviour";
import { ReportComponent } from "./reportComponent";

export class Report{
    sprintNr : number;
    reportGenerator : ReportBehaviour;
    
    constructor(sprintNr : number, generator : ReportBehaviour, public header : ReportComponent, public footer : ReportComponent, public teamComposition : string, public burndownChart : string, public effortPoints : string){
        this.sprintNr = sprintNr;
        this.reportGenerator = generator;
    }

    setHeader(logo : string, businessName : string, projectName : string, version : number, date: Date){
        this.header = new ReportComponent(logo, projectName, businessName, version, date);
    }

    setFooter(logo : string, businessName : string, projectName : string, version : number, date: Date){
        this.footer = new ReportComponent(logo, projectName, businessName, version, date);
    }

    setTeamComposition(teamComposition : string){
        this.teamComposition = teamComposition;
    }

    setEffortPoints(effortPoints : string){
        this.effortPoints = effortPoints;
    }

    generateReport(){
        this.reportGenerator.generateReport(this);
    }
}