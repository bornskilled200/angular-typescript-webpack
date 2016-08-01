import {TopbarModel} from '../../../core/models/impl/TopbarModel';
import {SharedModel} from '../../../core/models/impl/SharedModel';
export class TicketTopbarComponent implements ng.IComponentOptions{
    public controller: Function = TicketTopbarController;
    public template: string = `
        <div>
            <div class="collapsed-content" ng-if="!$ctrl.sharedModel.topbarCollapsed">
                <h1><i class="fa fa-twitter"></i>&nbsp;Post a new ticket</h1>
                <textarea class="form-control" ng-model="$ctrl.model.ticketContent"></textarea><br/>
                <button ng-disabled="$ctrl.model.ticketContent === ''"
                    ng-click="$ctrl.post()"
                    class="btn btn-primary btn-lg">
                        <i class="fa fa-envelope"></i>&nbsp;Post
                </button>
            </div>
            <i ng-click="$ctrl.toggleCollapsed()"
                class="fa fa-chevron-up dp-collapse dp-collapse-center"
                ng-class="{'fa-chevron-up': !$ctrl.sharedModel.topbarCollapsed, 'fa-chevron-down': $ctrl.sharedModel.topbarCollapsed}"></i>
        </div>
    `;
}
export class TicketTopbarController {
    public static $inject: Array<string> = ["SharedModel", "TopbarModel"];

    constructor(public sharedModel: SharedModel, public model: TopbarModel) {
    }

    public toggleCollapsed(): void {
        this.model.toggleCollapsed();
    }

    public post(): void {
        this.model.addTicket();
    }
}