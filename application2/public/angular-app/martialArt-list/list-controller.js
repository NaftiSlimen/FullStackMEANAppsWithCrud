angular.module("meanMartialArts").controller("MAController", MAController);
function MAController(MADataFactory)  {
    const vm= this;
    vm.title=  "Mean  Martial Arts  App";
    MADataFactory.getAllMartialArts().then(function(response) {
        vm.martialArts=  response;})}