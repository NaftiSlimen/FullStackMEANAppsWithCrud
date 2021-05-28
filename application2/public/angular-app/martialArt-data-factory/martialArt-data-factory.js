angular.module("meanMartialArts").factory("MADataFactory", MADataFactory);
function MADataFactory($http) {
    return {
        getAllMartialArts: getAllMartialArts,
        getOneMartialArt: getOneMartialArt,
        addMart:addMart,
        deleteMart:deleteMart
    };
    function getAllMartialArts() {
        return $http.get("/api/martialarts")
            .then(complete)
            .catch(failed);
    }
    function getOneMartialArt(id) {
        return $http.get("/api/martialarts/"+id)
            .then(complete)
            .catch(failed);
    }
    function addMart(mart) {
        console.log("whatttt");
        console.log(mart);
        console.log("whatttt");
        return $http.post("/api/martialarts/",mart)
            .then(complete)
            .catch(failed);
    }
    function deleteMart(martID) {
        return $http.delete("/api/martialarts/"+martID)
            .then(complete)
            .catch(failed);
    }
    function complete(response) {
        console.log(response.data);
        return response.data;
    }
    function failed(error) {
        return error.status.statusText;
    }
}