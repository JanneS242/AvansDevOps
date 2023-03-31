import { Sprint } from "../sprint/sprint";
import { ProductOwner } from "../models/users/productOwner";
import { CompositeComponent } from "./compositeComponent";
import { Visitor } from "./visitor";
import { PipelineStatus } from "./pipelineStatus";

export class Pipeline{
    private name : string;
    public jobs : Array<CompositeComponent>;
    public pipelineStatus : PipelineStatus = PipelineStatus.NotStarted
    public sprint? : Sprint;

    constructor(name : string){
        this.name = name;
        this.jobs = new Array<CompositeComponent>;
    }

    public addJob(job : CompositeComponent){
        this.jobs.push(job);
    }

    public accept(visitor : Visitor){
        visitor.visitPipeline(this);
    }

    public notifyScrumMasterWhenFailed(){
        if(this.sprint != null){
            if(this.pipelineStatus == PipelineStatus.Failed){
                this.sprint.scrumMaster.notificationTypes.forEach(type => {
                    type.notify();
                });
            }
        }
    }

    finishSprint(){
        if(this.sprint != null){
            this.sprint.finished = true;
        }
    }

    closeSprint(){
        if(this.sprint != null){
            this.sprint.closedForChanges = true;
        }
    }

    notifyWhenSucces(){
        if(this.sprint != null){
            if(this.pipelineStatus == PipelineStatus.Succeeded){
                this.sprint.scrumMaster.notificationTypes.forEach(type => {
                    type.notify();
                });
                this.sprint.teamMembers.forEach(member =>{
                    if(member instanceof ProductOwner){
                        member.notificationTypes.forEach(type => {
                            type.notify();
                        });
                    }
                });
            }
        }
    }
}