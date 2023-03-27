import { ReportBehaviour } from "./reportBehaviour";
import * as fs from 'fs';

export class PngReportBehaviour implements ReportBehaviour {
    generateReport(sprintNr : number) {
        fs.writeFile(`resources/png/report-${sprintNr}.png`, this.toString(), function (err) {
            if (err) {
                return console.error(err);
            }
            console.log("Sprint report has been created! - png");
        });
    }
}