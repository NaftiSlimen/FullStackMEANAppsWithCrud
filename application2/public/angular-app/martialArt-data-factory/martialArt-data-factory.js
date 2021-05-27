angular.module("meanMartialArts").factory("MADataFactory", MADataFactory);
function MADataFactory($http) {
    return {
        getAllMartialArts: getAllMartialArts,
        getOneMartialArt: getOneMartialArt
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
    function complete(response) {
        console.log(response.data);
        return response.data;
    }
    function failed(error) {
        return error.status.statusText;
    }
}