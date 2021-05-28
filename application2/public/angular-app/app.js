var a=angular.module("meanMartialArts",  ["ngRoute"]).config(config);
console.log("hi");

function config($routeProvider,$locationProvider)  {
   $locationProvider.hashPrefix("");
    $routeProvider.when("/martialarts",  {
        templateUrl:  "angular-app/martialArt-list/martialArts.html",
        controller:"MAController",
        controllerAs:  "MAController"}).when("/martialarts/:id", {
            templateUrl:  "angular-app/martialArt-display/martialArt.html",
            controller: "MADisplayController",
            controllerAs:  "MADisplayController"});};