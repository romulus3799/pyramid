angular.module('IndexController', [])
	.controller('IndexController', ($scope, $location) => {
		$scope.currentNavItem = $location.path() === '/' 
		? 'home' : 
		$location.path() === '/create'
		? 'create' :
		$location.path() === '/pyramids'
		? 'pyramids' : 'home';

		$scope.$on('$locationChangeStart', event => {
			$scope.currentNavItem = 
				$location.path() === '/' ? 'home' : $location.path().substr(1);
		});
	});

