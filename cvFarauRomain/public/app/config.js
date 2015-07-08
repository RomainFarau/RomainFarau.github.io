"use strict"
angular.module("cvModule",['ui.router','ui.bootstrap'])
.config(function ($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise('/');

	$stateProvider
		.state('index', {
			url:'/',
			views: {
				'header': {
					templateUrl: 'view/header.html'
				},
				'content': {
					templateUrl: 'view/home.html'
				},
				'footer':{
					templateUrl: 'view/footer.html'
				}
			}
		})
		.state('experience', {
			views:{
				'header': {
						templateUrl: 'view/header.html'
					},
				'content': {
					templateUrl: 'view/experience.html'
				},
				'footer':{
						templateUrl: 'view/footer.html'
				}
			}
		})
});


