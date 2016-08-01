config.$inject = ["$routeProvider"];
export function config($routeProvider: ng.route.IRouteProvider): void {
    $routeProvider.when("/tickets", {
        template: "<page-tickets></page-tickets>"
    });
}