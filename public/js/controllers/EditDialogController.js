angular.module('EditDialogController', [])
.controller('EditDialogController', ($scope, $mdDialog, pyramid, chapters) => {

	const ATTRIBUTES = [
		'_id',
		'name',
		'context',
		'contrast',
		'example',
		'function',
		'cause',
		'impact',
		'author',
		'chapter'
	];

	$scope.pyramid = pyramid;
	$scope.chapters = chapters;
	$scope.hide = () => { $mdDialog.hide(); };
	$scope.submit = () => { 
		for (let i in ATTRIBUTES)
			if (!pyramid[ATTRIBUTES[i]]) {
				console.log('Invalid ' + i)
				return;
			} 
		$mdDialog.hide(pyramid);
	};
	$scope.cancel = () => { $mdDialog.cancel(); };
});
