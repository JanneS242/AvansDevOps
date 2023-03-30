import { ReportBehaviour } from "./reportBehaviour";
import * as fs from 'fs';
import { Report } from "./report";

export class PngReportBehaviour implements ReportBehaviour {
    generateReport(report : Report) {
        let file : string = `${report.header?.toString()} \n ${report.teamComposition} \n ${report.burndownChart} \n ${report.effortPoints} \n ${report.footer?.toString()}`;
        
        fs.writeFile(`resources/png/report-${report.sprintNr}.png`, file, function (err) {
            if (err) {
                return console.error(err);
            } 
        });
        console.log("Sprint report has been created! - png");
    }
}