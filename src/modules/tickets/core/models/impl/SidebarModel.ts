import {Ticket} from "../../entities/Ticket";
import {SharedModel} from './SharedModel';
export class SidebarModel {
    public static $inject: Array<string> = ["SharedModel"];
    public tweets: Array<Ticket>;

    constructor(private sharedModel: SharedModel) {
        this.tweets = sharedModel.tickets;
    }

    public toggleCollapsed(): void {
        this.sharedModel.toggleSidebar();
    }
}
