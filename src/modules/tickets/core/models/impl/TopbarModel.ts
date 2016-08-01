import {Ticket} from "../../entities/Ticket";
import {SharedModel} from './SharedModel';
export class TopbarModel {
    public static $inject: Array<string> = ["SharedModel"];
    public ticketContent: string;

    constructor(private sharedModel: SharedModel) {
        this.sharedModel = sharedModel;
    }

    public toggleCollapsed(): void {
        this.sharedModel.toggleTopbar();
    }

    public addTicket(): void {
        this.sharedModel.tickets.push(new Ticket("@brecht", this.ticketContent, false));
        this.ticketContent = "";
    }
}