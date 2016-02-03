app.controller('mainController', function($scope, $http) {
   
    $scope.search = fetch;//($scope.id);

    function fetch() {
        $http.get("http://www.omdbapi.com/?s=" + $scope.title)
            .then(function(response) {
                $scope.details = response.data.Search;
                console.log($scope.details);
            });
    }
});

app.controller('secondController', function($scope, $http, $routeParams) {
		getDetail();

    function getDetail() {
        $http.get("http://www.omdbapi.com/?i=" + $routeParams.imdbID + "&tomatoes=true&plot=full")
            .then(function(response) {
                $scope.details = response.data;
                console.log(response.data)
            });
    }

    $scope.detailData = function(movie) {
        $scope.search = movie.Title;
        $scope.search = movie.imdbID;


    };

});

