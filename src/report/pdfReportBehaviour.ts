import { ReportBehaviour } from "./reportBehaviour";
import * as fs from 'fs';

export class PdfReportBehaviour implements ReportBehaviour {
    generateReport(sprintNr : number) {
        fs.writeFile(`resources/pdf/report-${sprintNr}.pdf`, this.toString(), function (err) {
            if (err) {
                return console.error(err);
            }
            console.log("Sprint report has been created! - pdf");
        });
    }
}