import "angular";
import "angular-mocks";
import "../../../../../../src/modules/tickets/angular/index";
import {ComponentTest} from "../../../../util/ComponentTest";
import 'phantomjs-polyfill';
import {TicketTopbarController} from "../../../../../../src/modules/tickets/angular/components/ticketTopbar/TicketTopbarComponent";
import {TopbarModel} from '../../../../../../src/modules/tickets/core/models/impl/TopbarModel';
import {SharedModel} from '../../../../../../src/modules/tickets/core/models/impl/SharedModel';

describe("Component TicketTopbarComponent", () => {
    var directiveTest: ComponentTest<TicketTopbarController>;
    var sharedModelMock: SharedModel;
    var topbarModelMock: TopbarModel;
    beforeEach(angular.mock.module("app.tickets", ($provide: any) => {
        topbarModelMock = <TopbarModel>jasmine.createSpyObj("topbarModel", ["toggleCollapsed", "addTicket"]);
        sharedModelMock = <SharedModel>jasmine.createSpyObj("sharedModel", ["toggleTopbar", "toggleSidebar"]);
        $provide.service("SharedModel", () =>  sharedModelMock);
        $provide.service("TopbarModel", () =>  topbarModelMock);
    }));
    beforeEach(() => {
        directiveTest = new ComponentTest<TicketTopbarController>("<ticket-topbar></ticket-topbar>", "ticketTopbar");
    });

    it("should expose the sharedModel", () => {
        var vm: TicketTopbarController = directiveTest.createComponent({});
        expect(vm.sharedModel).toBe(sharedModelMock);
    });
    it("should expose the topbarModel", () => {
        var vm: TicketTopbarController = directiveTest.createComponent({});
        expect(vm.model).toEqual(topbarModelMock);
    });

    describe("on toggleCollapsed()", () => {
        it("should collapse the topbar", () => {
            var vm: TicketTopbarController = directiveTest.createComponent({});
            vm.toggleCollapsed();
            expect(vm.model.toggleCollapsed).toHaveBeenCalled();
        });
    });
    describe("on post()", () => {
        it("should post a ticket", () => {
            var vm: TicketTopbarController = directiveTest.createComponent({});
            vm.post();
            expect(vm.model.addTicket).toHaveBeenCalled();
        });
    });
});

