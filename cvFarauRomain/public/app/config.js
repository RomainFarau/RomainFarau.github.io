"use strict"
var sample=angular.module("cvModule",['ui.router']);
sample.config(function ($stateProvider, $urlRouteProvider){
	$urlRouteProvider.otherwise('/');

	$stateProvider
		.state('home', {
			url:'/',
			views: {
				'header': {
					templateUrl: 'view/header.html',
					controller: 'headerController'
				},
				'content': {
					templateUrl: 'view/home.html',
					controller: 'cvModController'
				},
				'footer':{
					templateUrl: 'view/footer.html',
					controller: 'footerController'
				}
			}
		})
});


