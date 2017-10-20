angular.module('PyrCtrl', [])
	.controller('PyramidController', ($scope, $http, PyramidService) => {
		console.log("Into pyr controller");
		//-------------------ESTABLISH SERVICES-------------------//
		//get all pyramids
		$scope.pyramids = []
		PyramidService.get().then((pyramids) => {
			console.log(pyramids.data);
			$scope.pyramids = pyramids.data;
		})
		$scope.updatePyramid = (id) => {
			PyramidService.update(id, $scope.formData)
			.then((pyramids) => {
				$scope.pyramids = pyramids.data;
			})
		}
		$scope.deletePyramid = (id) => {
			PyramidService.delete(id).then((pyramids,err) => {
				$scope.pyramids = pyramids.data;
				if (err) {console.log(err); }
			})
		}

		//-------------------SETUP-------------------//
		//get chapters
		$scope.chapters = [];
		PyramidService.getChapters().then((raw) => {
			$scope.chapters = raw.data.split('\n');
		})

		//setup form data
		$scope.formData = {
			name		: '',
			context		: '',
			contrast	: '',
			example		: '',
			application	: '',
			fn			: '',
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
			$scope.formData.application = pyramid.application;
			$scope.formData.fn = pyramid.fn;
			$scope.formData.cause = pyramid.cause;
			$scope.formData.impact = pyramid.impact;
			$scope.formData.author = pyramid.author;
			$scope.formData.chapter = pyramid.chapter;
		}
	});
