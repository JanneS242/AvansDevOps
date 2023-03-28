import { AnalyzeAction } from "./actions/analyzeAction";
import { BuildAction } from "./actions/buildAction";
import { DeployAction } from "./actions/deployAction";
import { PackageAction } from "./actions/packageAction";
import { SourcesAction } from "./actions/sourcesAction";
import { TestAction } from "./actions/testAction";
import { UtilityAction } from "./actions/utilityAction";

export interface PipelineVisitor{
    visitSources(action: SourcesAction): void;
    visitPackage(action: PackageAction): void;
    visitBuild(action: BuildAction): void;
    visitTest(action: TestAction): void;
    visitAnalyze(action: AnalyzeAction): void;
    visitDeploy(action: DeployAction):void;
    visitUtility(action: UtilityAction):void;
} 