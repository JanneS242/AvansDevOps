import { Report } from "./report";

export interface ReportBehaviour{
    generateReport(report: Report) : any;
}