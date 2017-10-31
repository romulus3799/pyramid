angular.module('PyramidApp', 
	[
		'ngRoute', 
		'appRoutes',
		'ngMaterial', 
		'CreateCtrl', 
		'PyrCtrl', 
		'PyramidService',
		'md.data.table'
	])
	.config($mdThemingProvider => {

		$mdThemingProvider.theme('pyramidtheme')
		.primaryPalette('indigo')
		.accentPalette('orange')
		.warnPalette('pink');

		$mdThemingProvider.setDefaultTheme('pyramidtheme');
	})
