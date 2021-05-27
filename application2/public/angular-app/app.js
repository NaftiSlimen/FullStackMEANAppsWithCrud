var a=angular.module("meanMartialArts",  ["ngRoute"]).config(config);
console.log("hi");

function config($routeProvider,$locationProvider)  {
   $locationProvider.hashPrefix("");
    $routeProvider.when("/martialart",  {
        templateUrl:  "angular-app/martialArt-list/martialArts.html",
        controller:"MAController",
        controllerAs:  "MAController"}).when("/martialart/:id", {
            templateUrl:  "angular-app/martialArt-display/martialArt.html",
            controller: "MADisplayController",
            controllerAs:  "MADisplayController"});};