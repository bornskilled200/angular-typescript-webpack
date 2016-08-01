import "angular";
import "angular-mocks";
import "../../../../../../src/modules/tickets/angular/index";
import {ComponentTest} from "../../../../util/ComponentTest";
import 'phantomjs-polyfill';
import {TicketSidebarController} from "../../../../../../src/modules/tickets/angular/components/ticketSidebar/TicketSidebarComponent";
import {SharedModel} from '../../../../../../src/modules/tickets/core/models/impl/SharedModel';
import {SidebarModel} from '../../../../../../src/modules/tickets/core/models/impl/SidebarModel';

describe("Component TicketSidebarComponent", () => {
    var directiveTest: ComponentTest<TicketSidebarController>;
    var sharedModelMock: SharedModel;
    var sidebarModelMock: SidebarModel;
    beforeEach(angular.mock.module("app.tickets", ($provide: any) => {
        sidebarModelMock = <SidebarModel>jasmine.createSpyObj("sidebarModel", ["toggleCollapsed"]);
        sharedModelMock = <SharedModel>jasmine.createSpyObj("sharedModel", ["toggletopbar", "toggleSidebar"]);
        $provide.service("SharedModel", () =>  sharedModelMock);
        $provide.service("SidebarModel", () =>  sidebarModelMock);
    }));
    beforeEach(() => {
        directiveTest = new ComponentTest<TicketSidebarController>("<ticket-sidebar></ticket-sidebar>", "ticketSidebar");
    });

    it("should expose the sharedModel", () => {
        var vm: TicketSidebarController = directiveTest.createComponent({});
        expect(vm.sharedModel).toBe(sharedModelMock);
    });
    it("should expose the sidebarModel", () => {
        var vm: TicketSidebarController = directiveTest.createComponent({});
        expect(vm.model).toEqual(sidebarModelMock);
    });

    describe("on toggleCollapsed()", () => {
        it("should collapse the sidebar", () => {
            var vm: TicketSidebarController = directiveTest.createComponent({});
            vm.toggleCollapsed();
            expect(vm.model.toggleCollapsed).toHaveBeenCalled();
        });
    });
});

