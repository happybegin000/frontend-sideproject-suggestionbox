var app = angular.module('SuggestionBox', ['ngRoute', 'firebase']);

app.config(function ($routeProvider) { 
	$routeProvider 
	    .when('/suggestion', { 
	      controller: 'HomeController', 
	      templateUrl: 'views/home.html' 
	    })
	    .when('/comment/:id', { 
	      controller: 'commentController', 
	      templateUrl: 'views/comment.html' 
	    })
	    .otherwise({ 
	      redirectTo: '/suggestion' 
	    }); 
});
