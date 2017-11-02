angular.module('appRoutes', [])
	.config(['$routeProvider', '$locationProvider',
($routeProvider, $locationProvider) => {

	$routeProvider
		.when('/', {
			templateUrl		: '/views/home.html',
			controllerAs	: 'HomeController'
		})
		.when('/create', {
			templateUrl		: '/views/create.html',
			controllerAs	: 'CreateController'
		})
		.when('/pyramids', {
			templateUrl		: '/views/list.html',
			controllerAs	: 'ListController'
		})

	$locationProvider.html5Mode(true)
}])
