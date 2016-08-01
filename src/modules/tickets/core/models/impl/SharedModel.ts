import {Ticket} from "../../entities/Ticket";
import {TicketService} from '../../services/impl/TicketService';
export class SharedModel{
    public static $inject: Array<string> = ["TweetService"];
    public tickets: Array<Ticket>;
    public topbarCollapsed: Boolean = false;
    public sidebarCollapsed: Boolean = false;

    constructor(tweetService: TicketService) {
        this.tickets = tweetService.getAll();
    }

    public toggleTopbar(): void {
        this.topbarCollapsed = !this.topbarCollapsed;
    }

    public toggleSidebar(): void {
        this.sidebarCollapsed = !this.sidebarCollapsed;
    }

}

