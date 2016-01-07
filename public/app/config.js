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
			url:'/',
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
		.state('formations', {
			url:'/',
			views:{
				'header': {
						templateUrl: 'view/header.html'
					},
				'content': {
					templateUrl: 'view/formations.html'
				},
				'footer':{
						templateUrl: 'view/footer.html'
				}
			}
		})
		.state('competences', {
			url:'/',
			views:{
				'header': {
						templateUrl: 'view/header.html'
					},
				'content': {
					templateUrl: 'view/competences.html'
				},
				'footer':{
						templateUrl: 'view/footer.html'
				}
			}
		})
		.state('loisirs', {
			url:'/',
			views:{
				'header': {
						templateUrl: 'view/header.html'
					},
				'content': {
					templateUrl: 'view/loisirs.html'
				},
				'footer':{
						templateUrl: 'view/footer.html'
				}
			}
		})
});


