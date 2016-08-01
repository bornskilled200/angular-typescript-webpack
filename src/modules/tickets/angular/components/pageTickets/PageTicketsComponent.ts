import {SharedModel} from '../../../core/models/impl/SharedModel';
export class PageTicketsComponent implements ng.IComponentOptions{
    public controller: Function = PageTicketsController;
    public template: string = `
        <ticket-sidebar ng-class="{'sidebar-collapsed': $ctrl.sharedModel.sidebarCollapsed}"></ticket-sidebar>
        <ticket-main></ticket-main>
    `
}
export class PageTicketsController {
    public static $inject: Array<string> = ["SharedModel"];
    constructor(public sharedModel: SharedModel) {
    }
}