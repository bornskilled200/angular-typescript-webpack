import {TopbarModel} from "../../../../../../src/modules/tickets/core/models/impl/TopbarModel";
import {SharedModel} from "../../../../../../src/modules/tickets/core/models/impl/SharedModel";
describe("Model: TopbarModel", () => {
    var sharedModelMock: SharedModel;
    var topbarModel: TopbarModel;
    beforeEach(() => {
        sharedModelMock = jasmine.createSpyObj("sharedModel", ["toggleTopbar", "toggleSidebar"]);
        sharedModelMock.tickets = [];
        sharedModelMock.sidebarCollapsed = false;
        sharedModelMock.topbarCollapsed = false;
        topbarModel = new TopbarModel(sharedModelMock);
    });
    describe("on toggleCollapsed()", () => {
        it("should collapse the topbar", () => {
            topbarModel.toggleCollapsed();
            expect(sharedModelMock.toggleTopbar).toHaveBeenCalled();
        });
    });
    describe("on addTweet", () => {
        it("should add a tweet", () => {
            topbarModel.ticketContent = "";
            var originalLength: number = sharedModelMock.tickets.length;
            topbarModel.addTicket();
            expect(sharedModelMock.tickets.length).toBe(originalLength + 1);
        });
    });
});