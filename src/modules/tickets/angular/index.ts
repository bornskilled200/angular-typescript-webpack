import "angular";
import "angular-route";
import {config as routesConfig} from "./configs/routes";
import {PageTicketsComponent} from "./components/pageTickets/PageTicketsComponent";
import {TicketContentComponent} from "./components/ticketContent/TicketContentComponent";
import {TicketMainComponent} from "./components/ticketMain/TicketMainComponent";
import {TicketSidebarComponent} from "./components/ticketSidebar/TicketSidebarComponent";
import {TicketTopbarComponent} from "./components/ticketTopbar/TicketTopbarComponent";
import {ContentModel} from "../core/models/impl/ContentModel";
import {SharedModel} from "../core/models/impl/SharedModel";
import {SidebarModel} from "../core/models/impl/SidebarModel";
import {TopbarModel} from "../core/models/impl/TopbarModel";
import {TicketService} from "../core/services/impl/TicketService";

angular.module("app.tickets", ["ngRoute"])
    .service("ContentModel", ContentModel)
    .service("SharedModel", SharedModel)
    .service("SidebarModel", SidebarModel)
    .service("TopbarModel", TopbarModel)
    .service("TicketService", TicketService)
    .component("pageTickets", new PageTicketsComponent())
    .component("ticketContent", new TicketContentComponent())
    .component("ticketMain", new TicketMainComponent())
    .component("ticketSidebar", new TicketSidebarComponent())
    .component("ticketTopbar", new TicketTopbarComponent())
    .config(routesConfig);
