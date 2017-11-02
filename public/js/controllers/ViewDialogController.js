angular.module('ViewDialogController', [])
.controller('ViewDialogController', ($scope, $mdDialog, pyramid) => {
	$scope.pyramid = pyramid;
	$scope.hide = () => { $mdDialog.hide(); };
	$scope.cancel = () => { $mdDialog.cancel(); };
});
