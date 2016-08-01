import {ContentModel} from "../../../../../../src/modules/tickets/core/models/impl/ContentModel";
import {SharedModel} from '../../../../../../src/modules/tickets/core/models/impl/SharedModel';
describe("model: ContentModel", () => {
    describe("on initialization", () => {
        it("should expose the tickets passed from the sharedModel", () => {
            var sharedModelMock: SharedModel = jasmine.createSpyObj("sharedModel", ["toggleTopbar", "toggleSidebar"]);
            sharedModelMock.tickets = [];
            sharedModelMock.sidebarCollapsed = false;
            sharedModelMock.topbarCollapsed = false;
            var contentModel: ContentModel = new ContentModel(sharedModelMock);
            expect(contentModel.tweets).toBe(sharedModelMock.tickets);
        });
    });
});