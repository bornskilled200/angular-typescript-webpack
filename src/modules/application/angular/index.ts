import "angular";

import {StarComponent} from "./components/star/StarComponent";
import {TwitterApplicationComponent} from "./components/twitterApplication/TwitterApplicationComponent";
import {TicketApplicationComponent} from "./components/ticketApplication/TicketApplicationComponent";
angular.module("app.application", [])
    .component("twitterApplication", new TwitterApplicationComponent())
    .component("ticketApplication", new TicketApplicationComponent())
    .component("star",  new StarComponent());