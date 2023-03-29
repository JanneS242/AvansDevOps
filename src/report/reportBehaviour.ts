import { User } from "../models/users/user";
import { Report } from "./report";

export interface ReportBehaviour{
    generateReport(report: Report) : any;
}