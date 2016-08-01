import {Ticket} from "../../entities/Ticket";
import {SharedModel} from './SharedModel';

export class ContentModel {
    public static $inject: Array<string> = ["SharedModel"];
    public tweets: Array<Ticket>;

    constructor(sharedModel: SharedModel) {
        this.tweets = sharedModel.tickets;
    }
}
