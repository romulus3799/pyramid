angular.module('appRoutes', [])
	.config(['$routeProvider', '$locationProvider',
($routeProvider, $locationProvider) => {

	$routeProvider
		.when('/', {
			templateUrl		: 'views/editor.html',
			controllerAs	: 'MainController'
		})
		.when('/pyramids', {
			templateUrl		: 'views/pyramids.html',
			controllerAs	: 'MainController'
		})

	$locationProvider.html5Mode(true)
}])
