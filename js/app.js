var app = angular.module('movie-app', ['ngRoute']);

app.config(function($routeProvider, $locationProvider){
	$routeProvider
	.when('/', {
		templateUrl: '/main.html',
		controller: 'mainController'
	})
	.when('/show/:imdbID', {
		templateUrl: '/show.html',
		controller: 'secondController'
	});
	

	// $locationProvider.html5Mode(true);

});