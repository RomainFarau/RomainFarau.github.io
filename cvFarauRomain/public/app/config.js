"use strict"
var sample=angular.module("cvModule",['ngRoute']);
sample.config(['$routeProvider',
function ($routeProvider){
	return $routeProvider.when('/home', {
		templateUrl: 'view/home.html',
		controller: 'cvModController'
	}).when('/contact', {
		templateUrl: 'view/contact.html',
		controller: 'contactController'
	}).otherwise({
		redirectTo: '/home'
	});
}]);



sample.controller('cvModController', function() {
	//var cvmodCtrl=this;
});

sample.controller('contactController', function() {
	//var cvmodCtrl=this;
});