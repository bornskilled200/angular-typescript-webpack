import {ContentModel} from '../../../core/models/impl/ContentModel';
export class TicketContentComponent implements ng.IComponentOptions {
    public controller: Function = TicketContentController;
    public template: string = `
        <div>
            <h2>Feed</h2>
            <p>These are the most recent tickets</p>
            <div class="dp-tickets">
                <div class="row dp-ticket" ng-repeat="ticket in $ctrl.model.tickets">
                    <div class="col-sm-8">
                        <h3>{{::ticket.user}} Ticketed</h3>
                        <p>{{::ticket.content}}</p>
                        <i class="fa fa-reply dp-ticket-icon"></i>
                        <i class="fa fa-reticket dp-ticket-icon"></i>
                        <i class="fa fa-star dp-ticket-icon"></i>
                        <i class="fa fa-ellipsis-h dp-ticket-icon"></i>
                    </div>
                    <div class="col-sm-4">
                        <star starred="ticket.starred" class="pull-right"></star>
                    </div>
                </div>
            </div>
        </div>
    `;
}
export class TicketContentController {
    public static $inject: Array<string> = ["ContentModel"];
    constructor(public model: ContentModel) {
    }
}