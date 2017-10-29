angular.module('PyramidApp', 
	[
		'ngRoute', 
		'appRoutes',
		'ngMaterial', 
		'CreateCtrl', 
		'PyrCtrl', 
		'PyramidService'
	])
	.config($mdThemingProvider => {

		$mdThemingProvider.theme('pyramidtheme')
		.primaryPalette('indigo')
		.accentPalette('orange')
		.warnPalette('pink');

		$mdThemingProvider.setDefaultTheme('pyramidtheme');
	})
