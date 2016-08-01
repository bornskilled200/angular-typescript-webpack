import "angular";
import "angular-mocks";
import "../../../../../../src/modules/tickets/angular/index";
import {ComponentTest} from "../../../../util/ComponentTest";
import 'phantomjs-polyfill';
import {TicketMainController} from "../../../../../../src/modules/tickets/angular/components/ticketMain/TicketMainComponent";
import {SharedModel} from '../../../../../../src/modules/tickets/core/models/impl/SharedModel';

describe("Component TicketSidebarComponent", () => {
    var directiveTest: ComponentTest<TicketMainController >;
    var sharedModelMock: SharedModel;
    beforeEach(angular.mock.module("app.tickets", ($provide: any) => {
        sharedModelMock = <SharedModel>{};
        $provide.service("SharedModel", () =>  sharedModelMock);
    }));
    beforeEach(() => {
        directiveTest = new ComponentTest<TicketMainController>("<ticket-main></ticket-main>", "ticketMain");
    });

    it("should expose the sharedModel", () => {
        var vm: TicketMainController = directiveTest.createComponent({});
        expect(vm.sharedModel).toBe(sharedModelMock);
    });
});