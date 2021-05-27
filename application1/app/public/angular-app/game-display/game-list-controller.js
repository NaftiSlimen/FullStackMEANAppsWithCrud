angular.module("meanGames").controller("GameDisplayController", GameDisplayController);


function GameDisplayController(GameDataFactory, $routeParams) {
    const vm = this; 
    const id = $routeParams.id;
    GameDataFactory.getOneGame(id).then(function (response) {
        vm.game = response
    });
}