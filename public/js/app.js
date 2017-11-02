angular.module('PyramidApp', 
	[
		'ngRoute', 
		'appRoutes',
		'ngMaterial',
		'IndexController', 
		'CreateController', 
		'ListController', 
		'ViewDialogController', 
		'EditDialogController', 
		'PyramidService',
		'md.data.table'
	])
	.config($mdThemingProvider => {

		$mdThemingProvider.theme('pyramidtheme')
		.primaryPalette('green')
		.accentPalette('indigo')
		.warnPalette('pink');

		$mdThemingProvider.setDefaultTheme('pyramidtheme');
	})
