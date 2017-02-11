var app = angular.module("myApp", [ "ngRoute" ]);
app.config(function($routeProvider) {
	$routeProvider.when("/home", { templateUrl : "views/home.html", controller : "homeController" }).when('/contact', { templateUrl : "views/contactUS.html", controller : "contactUsController" })
			.otherwise({ redirect : "/home", });
});