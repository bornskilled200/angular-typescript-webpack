import "../../../../../../src/modules/tickets/angular/index";
import "angular";
import "angular-mocks";
import {ComponentTest} from "../../../../util/ComponentTest";
import 'phantomjs-polyfill';
import {PageTicketsController} from "../../../../../../src/modules/tickets/angular/components/pageTickets/PageTicketsComponent";
import {SharedModel} from '../../../../../../src/modules/tickets/core/models/impl/SharedModel';
describe("Component PageTicketsComponent", () => {
    var directiveTest: ComponentTest<PageTicketsController>;
    var sharedModelMock: SharedModel;
    beforeEach(angular.mock.module("app.tickets", ($provide: any) => {
        sharedModelMock = <SharedModel>{};
        $provide.service("SharedModel", () =>  sharedModelMock);
    }));
    beforeEach(() => {
        directiveTest = new ComponentTest<PageTicketsController>("<page-tickets></page-tickets>", "pageTickets");
    });

    it("should expose the sharedModel", () => {
        var vm: PageTicketsController = directiveTest.createComponent({});
        expect(vm.sharedModel).toBe(sharedModelMock);
    });
});