angular.module('appRoutes', [])
	.config(['$routeProvider', '$locationProvider',
($routeProvider, $locationProvider) => {

	$routeProvider
		.when('/', {
			templateUrl		: 'views/editor.html',
			controllerAs	: 'MainController'
		})
		// TODO: add when pyramids

	$locationProvider.html5Mode(true)
}])
