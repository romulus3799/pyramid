angular.module('appRoutes', [])
	.config(['$routeProvider', '$locationProvider',
($routeProvider, $locationProvider) => {

	$routeProvider
		.when('/', {
			templateUrl		: '/views/home.html',
			controllerAs	: 'HomeController'
		})
		.when('/create', {
			templateUrl		: '/views/editor.html',
			controllerAs	: 'CreateController'
		})
		.when('/pyramids', {
			templateUrl		: '/views/pyramids.html',
			controllerAs	: 'PyramidController'
		})

	$locationProvider.html5Mode(true)
}])
