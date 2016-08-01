import {SharedModel} from "../../../../../../src/modules/tickets/core/models/impl/SharedModel";
import {Ticket} from "../../../../../../src/modules/tickets/core//entities/Ticket";
import Spy = jasmine.Spy;
import {TicketService} from '../../../../../../src/modules/tickets/core/services/impl/TicketService';
describe("model: SharedModel", () => {
    var tweetServiceMock: TicketService;
    var sharedModel: SharedModel;
    var getAllResult: Array<Ticket> = [new Ticket("@test", "test", false)];
    beforeEach(() => {
        tweetServiceMock = jasmine.createSpyObj("TweetService", ["getAll"]);
        (<Spy>tweetServiceMock.getAll).and.returnValue(getAllResult);
        sharedModel = new SharedModel(tweetServiceMock);
    });
    describe("on initialization", () => {
        it("should set the topbarCollapsed property to false by default", () => {
            expect(sharedModel.topbarCollapsed).toBe(false);
        });

        it("should set the sidebarCollapsed property to false by default", () => {
            expect(sharedModel.sidebarCollapsed).toBe(false);
        });
        it("should get the tweets from the service", () => {
            expect(sharedModel.tickets).toBe(getAllResult);
        });
    });
    describe("When toggleTopbar()", () => {
        it("should collapse the topbar", () => {
            sharedModel.toggleTopbar();
            expect(sharedModel.topbarCollapsed).toBe(true);
            sharedModel.toggleTopbar();
            expect(sharedModel.topbarCollapsed).toBe(false);
        });
    });

    describe("When toggleSidebar()", () => {
        it("should collapse the sidebar", () => {
            sharedModel.toggleSidebar();
            expect(sharedModel.sidebarCollapsed).toBe(true);
            sharedModel.toggleSidebar();
            expect(sharedModel.sidebarCollapsed).toBe(false);
        });
    });
});