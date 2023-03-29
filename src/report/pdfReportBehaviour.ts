import { ReportBehaviour } from "./reportBehaviour";
import * as fs from 'fs';
import { Report } from "./report";

export class PdfReportBehaviour implements ReportBehaviour {
    generateReport(report : Report) {
        let file : string = `${report.header.toString()} \n ${report.teamComposition} \n ${report.burndownChart} \n ${report.effortPoints} \n ${report.footer.toString()}`;
        
        fs.writeFile(`resources/pdf/report-${report.sprintNr}.pdf`, file, function (err) {
            if (err) {
                return console.error(err);
            }
            console.log("Sprint report has been created! - pdf");
        });
    }
}