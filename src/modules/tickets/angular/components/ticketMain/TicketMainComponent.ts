import {SharedModel} from '../../../core/models/impl/SharedModel';
export class TicketMainComponent implements ng.IComponentOptions{
    public controller: Function = TicketMainController;
    public template: string = `
        <ticket-topbar ng-class="{'topbar-collapsed': $ctrl.sharedModel.topbarCollapsed}"></ticket-topbar>
        <ticket-content></ticket-content>
    `;
}
export class TicketMainController {
    public static $inject: Array<string> = ["SharedModel"];
    constructor(public sharedModel: SharedModel) {
    }
}
