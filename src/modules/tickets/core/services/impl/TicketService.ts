import {Ticket} from "../../entities/Ticket";
export class TicketService {
    private tweets:Array<Ticket> = [];
    
    constructor() {
        for (var i: number = 0; i < 5; i++) {
            this.tweets.push(new Ticket("@user", "Content", false));
        }
    }

    public getAll(): Array<Ticket> {
        return this.tweets;
    }
}