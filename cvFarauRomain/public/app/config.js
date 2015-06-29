"use strict"
angular.module("cvModule",['ui.router'])
.config(function ($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise('/');

	$stateProvider
		.state('index', {
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
		.state('experience', {
			'content': {
				templateUrl: 'view/experience.html'
			}
		})
});


