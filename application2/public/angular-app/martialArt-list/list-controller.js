angular.module("meanMartialArts").controller("MAController", MAController);
function MAController(MADataFactory,$window,$route) {
    const vm = this;
    vm.title = "Mean  Martial Arts  App";
    MADataFactory.getAllMartialArts()
        .then(function (response) {
            vm.martialArts = response;
        })
    vm.addMartialArt = function () {
        console.log("----------------");
        const postData = {
            name: vm.maname,
            origin: vm.maorigin,
            inventionDate: vm.mainventionDate,
            caracteristics: {
                selfDefenseEfficiency: vm.maselfDefEff,
                dangerOnOpponent: vm.maDangerOpp,
                description: vm.maDescription,
                weapons: vm.maWeapons
            },

            hallOfFame: [{
                trophies: [{description:vm.maHoftrophies}],
                fullName: vm.maHofName,
                countryOfOrigin: vm.maHofOrigin
            }]
        };
        
        MADataFactory.addMart(postData)
            .then(function (response) {
                console.log("Martial art  saved");
                $window.alert("Martial art  added successfully!");
                $route.reload();
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    





}