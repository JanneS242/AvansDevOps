import { Sprint } from "../../sprint/sprint";
import { ProductOwner } from "../users/productOwner";
import { CompositeComponent } from "./compositeComponent";
import { Visitor } from "./visitor";

export class Pipeline{
    name : String;
    jobs : Array<CompositeComponent>;
    pipelineStatus : PipelineStatus = PipelineStatus.NotStarted
    sprint? : Sprint;

    constructor(name : String){
        this.name = name;
        this.jobs = new Array<CompositeComponent>;
    }

    addJob(job : CompositeComponent){
        this.jobs.push(job);
    }

    accept(visitor : Visitor){
        visitor.visitPipeline(this);
    }

    notifyScrumMasterWhenFailed(){
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