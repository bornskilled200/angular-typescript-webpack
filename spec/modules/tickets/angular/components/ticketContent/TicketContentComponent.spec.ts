import "../../../../../../src/modules/tickets/angular/index";
import "angular";
import "angular-mocks";
import {ComponentTest} from "../../../../util/ComponentTest";
import 'phantomjs-polyfill';
import {TicketContentController} from "../../../../../../src/modules/tickets/angular/components/ticketContent/TicketContentComponent";
import {ContentModel} from '../../../../../../src/modules/tickets/core/models/impl/ContentModel';

describe("Component TicketContentComponent", () => {
    var directiveTest: ComponentTest<TicketContentController>;
    var contentModelMock: ContentModel;
    beforeEach(angular.mock.module("app.tickets", ($provide: any) => {
        contentModelMock = <ContentModel>{};
        $provide.service("ContentModel", () =>  contentModelMock);
    }));
    beforeEach(() => {
        directiveTest = new ComponentTest<TicketContentController>("<ticket-content></ticket-content>", "ticketContent");
    });

    it("should expose the sharedModel", () => {
        var vm: TicketContentController = directiveTest.createComponent({});
        expect(vm.model).toBe(contentModelMock);
    });
});