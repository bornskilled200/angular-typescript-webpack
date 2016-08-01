import {SidebarModel} from '../../../core/models/impl/SidebarModel';
import {SharedModel} from '../../../core/models/impl/SharedModel';
export class TicketSidebarComponent implements ng.IComponentOptions {
    public template: string = `
        <div ng-class="{'sidebar-collapsed': $ctrl.sharedModel.sidebarCollapsed}">
            <div>
                <i ng-click="$ctrl.toggleCollapsed()" class="fa dp-collapse dp-collapse-right"
                ng-class="{'fa-chevron-left': !$ctrl.sharedModel.sidebarCollapsed, 'fa-chevron-right': $ctrl.sharedModel.sidebarCollapsed}"></i>
                <div class="collapsed-content">
                    <h2>Starred tickets</h2>
                    <p>Here we have an overview of our starred tickets</p>
                    <div ng-repeat="ticket in $ctrl.model.tickets" ng-if="ticket.starred">
                        {{::ticket.user}} has ticketed {{::ticket.content}}
                    </div>
                </div>
            </div>
        </div>
    `
    public controller: Function = TicketSidebarController;
}
export class TicketSidebarController {
    public static $inject: Array<string> = ["SidebarModel", "SharedModel"];

    constructor(public model: SidebarModel, public sharedModel: SharedModel) {
    }

    public toggleCollapsed(): void {
        this.model.toggleCollapsed();
    }
}
