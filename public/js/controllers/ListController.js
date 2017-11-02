angular.module('ListController', [])
	.controller('ListController', ($scope, $mdDialog, $http, PyramidService) => {
		console.log("Into pyr controller");
		
		//-------------------SETUP TABLE-------------------//
		$scope.selected = [];

		$scope.query = {
			order: 'name',
			limit: 5,
			page: 1
		};
		//-------------------ESTABLISH SERVICES-------------------//
		//get all pyramids
		$scope.pyramids = []
		$scope.getPyramids = () => {
			PyramidService.get().then((pyramids) => {
				$scope.pyramids = pyramids.data;
			});
		};
		$scope.getPyramids();
		$scope.updatePyramid = (id) => {
			PyramidService.update(id, $scope.formData)
			.then((pyramids) => {
				$scope.pyramids = pyramids.data;
			});
		}
		$scope.deletePyramid = (id) => {
			event.stopPropagation();

			PyramidService.delete(id).then((pyramids,err) => {
				$scope.pyramids = pyramids.data;
				if (err) {console.log(err); }
			});
		}

		//-------------------SETUP-------------------//
		//get chapters
		$scope.chapters = [];
		PyramidService.getChapters().then((raw) => {
			$scope.chapters = raw.data.split('\n');
		})

		$scope.showView = (pyr, event) => {
			$mdDialog.show({
				templateUrl: 'views/viewDialog.tmpl.html',
				locals: { pyramid: pyr },
				controller: ViewDialogController,
				targetEvent: event,
				clickOutsideToClose: true
			});
		}

		function ViewDialogController($scope, $mdDialog, pyramid) {
			$scope.pyramid = pyramid;
			$scope.hide = () => { $mdDialog.hide(); };
			$scope.cancel = () => { $mdDialog.cancel(); };
		}

		//setup form data
		$scope.formData = {
			name		: '',
			context		: '',
			contrast	: '',
			example		: '',
			function	: '',
			cause		: '',
			impact		: '',
			author		: '',
			chapter		: ''
		};

		//-------------------JQUERY SETUP-------------------//
		$(document).ready(() => {
			//set default chapter values for each pyramid
			for(let i = 0; i < $scope.pyramids.length; i++) {
				let pyr = $scope.pyramids[i];
				let options = $('#chapter-input-' + pyr._id).find('option');

				//iter over each option and check if it matches pyramid data
				for(let a = 0; a < options.length; a++) {
					if(options[a].val() === pyr.chapter) {
						options[a].attr('selected','selected');
						console.log('Found');
					}
				}
			}
		})


		//-------------------DYNAMIC-------------------//
		$scope.execUpdate = (pyr) => {
			$scope.updatePyramid(pyr._id);
			//refresh to see changes
			location.reload();

			//$scope.resetForm(pyr)
		}


		//perform call if box is confirmed
		// TODO: fix this; currently does nothing
		$scope.confirmAction = (message, id) => {
			let answer = confirm(message)
			if (answer) {
				deletePyramid(id)
			}
		}

		$scope.resetForm = (pyramid) => {
			$scope.formData.name = pyramid.name;
			$scope.formData.context = pyramid.context;
			$scope.formData.contrast = pyramid.contrast;
			$scope.formData.example = pyramid.example;
			$scope.formData.function = pyramid.function;
			$scope.formData.cause = pyramid.cause;
			$scope.formData.impact = pyramid.impact;
			$scope.formData.author = pyramid.author;
			$scope.formData.chapter = pyramid.chapter;
		}
	});
