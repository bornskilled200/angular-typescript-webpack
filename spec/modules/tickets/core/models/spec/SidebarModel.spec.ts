import {SidebarModel} from "../../../../../../src/modules/tickets/core/models/impl/SidebarModel";
import {SharedModel} from '../../../../../../src/modules/tickets/core/models/impl/SharedModel';
describe("Model: SidebarModel", () => {
    var sharedModelMock: SharedModel;
    var sidebarModel: SidebarModel;
    beforeEach(() => {
        sharedModelMock = jasmine.createSpyObj("sharedModel", ["toggleTopbar", "toggleSidebar"]);
        sharedModelMock.tickets = [];
        sharedModelMock.sidebarCollapsed = false;
        sharedModelMock.topbarCollapsed = false;
        sidebarModel = new SidebarModel(sharedModelMock);
    });
    describe("on initialization", () => {
        it("should expose the tickets from the sharedModel passed in the constructor", () => {
            expect(sidebarModel.tweets).toBe(sharedModelMock.tickets);
        });
    });
    describe("on toggleCollapsed()", () => {
        it("should collapse the sidebar", () => {
            sidebarModel.toggleCollapsed();
            expect(sharedModelMock.toggleSidebar).toHaveBeenCalled();
        });
    });
});