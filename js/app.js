var app = angular.module('SuggestionBox', ['ngRoute']);

app.config(function ($routeProvider) { 
	$routeProvider 
	    .when('/suggestion', { 
	      controller: 'HomeController', 
	      templateUrl: 'views/home.html' 
	    })
	    .otherwise({ 
	      redirectTo: '/suggestion' 
	    }); 
});
