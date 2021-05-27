angular.module("meanMartialArts").controller("MADisplayController", MADisplayController);


function MADisplayController(MADataFactory, $routeParams) {
    const vm = this; 
    const id = $routeParams.id;
    MADataFactory.getOneMartialArt(id).then(function (response) {
        vm.martialArt = response
    });
}