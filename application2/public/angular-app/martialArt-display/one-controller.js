angular.module("meanMartialArts").controller("MADisplayController", MADisplayController);


function MADisplayController(MADataFactory, $routeParams,$window) {
    const vm = this; 
    const id = $routeParams.id;
    MADataFactory.getOneMartialArt(id).then(function (response) {
        vm.martialArt = response
    });
    vm.deleteMart = function (maId) {
        //const maId=req.params.maID;
        MADataFactory.deleteMart(maId)
            .then(function (response) {
                console.log("Martial art  deleted");
                $window.alert("Martial art  deleted successfully!");
                $window.location.href ="http://localhost:5000/#/martialarts/";
            })
            .catch(function (error) {
                console.log(error);
            });}
}