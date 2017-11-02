angular.module('CreateCtrl', [])
	.controller('CreateController', ($scope, $http, PyramidService) => {
		console.log("Into editor controller")

		//ESTABLISH SERVICES
		//get all pyramids
		$scope.pyramids = []
		PyramidService.get().then((pyramids) => {
			console.log(pyramids.data);
			$scope.pyramids = pyramids.data
		})
		$scope.createPyramid = () => {
			for (let key in $scope.formData) {
				if (!$scope.formData[key]) {
					console.log("Error: invalid key " + key);
					return;
				}
			}
			PyramidService.create($scope.formData)
			.then(pyramids => {
				//clear form, update data
				$('#pyr-form').find('input[type=text]').val('')
				$scope.pyramids = pyramids.data
			}, error => {
				console.log('Error: ' + error)
			});
		}

		//get chapters
		$scope.chapters = []
		PyramidService.getChapters().then((raw) => {
			$scope.chapters = raw.data.split('\n')
		})

		//setup form data
		$scope.formData = {
			name		: '',
			context		: '',
			contrast	: '',
			example		: '',
			fn			: '',
			cause		: '',
			impact		: '',
			author		: '',
			chapter		: ''
		}
	})
