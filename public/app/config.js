"use strict"
angular.module("cvModule",['ui.router','ui.bootstrap'])
.config(function ($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise('/');

	$stateProvider
		.state('index', {
			url:'/',
			views: {
				'header': {
					templateUrl: 'public/view/header.html'
				},
				'content': {
					templateUrl: 'public/view/home.html'
				},
				'footer':{
					templateUrl: 'public/view/footer.html'
				}
			}
		})
		.state('experience', {
			url:'/',
			views:{
				'header': {
						templateUrl: 'public/view/header.html'
					},
				'content': {
					templateUrl: 'public/view/experience.html'
				},
				'footer':{
						templateUrl: 'public/view/footer.html'
				}
			}
		})
		.state('formations', {
			url:'/',
			views:{
				'header': {
						templateUrl: 'public/view/header.html'
					},
				'content': {
					templateUrl: 'public/view/formations.html'
				},
				'footer':{
						templateUrl: 'public/view/footer.html'
				}
			}
		})
		.state('competences', {
			url:'/',
			views:{
				'header': {
						templateUrl: 'public/view/header.html'
					},
				'content': {
					templateUrl: 'public/view/competences.html'
				},
				'footer':{
						templateUrl: 'public/view/footer.html'
				}
			}
		})
		.state('loisirs', {
			url:'/',
			views:{
				'header': {
						templateUrl: 'public/view/header.html'
					},
				'content': {
					templateUrl: 'public/view/loisirs.html'
				},
				'footer':{
						templateUrl: 'public/view/footer.html'
				}
			}
		})
});


