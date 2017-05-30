angular.module('appRoutes', [])
	.config(['$routeProvider', '$locationProvider',
($routeProvider, $locationProvider) => {

	$routeProvider
		// TODO: add "/" page
		.when('/pyramid/create', {
			templateUrl		: 'views/editor.html',
			controllerAs	: 'EditorController'
		})
		.when('/pyramid/pyramids', {
			templateUrl		: 'views/pyramids.html',
			controllerAs	: 'PyramidController'
		})

	$locationProvider.html5Mode(true)
}])
