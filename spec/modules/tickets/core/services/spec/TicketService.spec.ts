import {TicketService} from "../../../../../../src/modules/tickets/core/services/impl/TicketService";
import {Ticket} from "../../../../../../src/modules/tickets/core/entities/Ticket";
import * as _ from "lodash";
describe("Service: TicketService", () => {
    var tweetService: TicketService;
    beforeEach(() => {
        tweetService = new TicketService();
    });
    describe("on getAll()", () => {
        it("should return 5 tickets", () => {
            var res: Array<Ticket> = tweetService.getAll();
            expect(res.length).toBe(5);
            _.forEach(res, (tweet: Ticket) => {
                expect((<any>tweet.constructor).name).toEqual("Ticket");
            });
        });
    });
});