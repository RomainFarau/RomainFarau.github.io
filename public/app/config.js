"use strict"
angular.module("cvModule",['ui.router','ui.bootstrap'])
.config(function ($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise('/accueil');

	$stateProvider
		.state('index', {
			url:'/accueil',
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
			url:'/experiences',
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
			url:'/formations',
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
			url:'/competences',
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
			url:'/loisirs',
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


