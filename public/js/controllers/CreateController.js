angular.module('CreateController', [])
	.controller('CreateController', ($scope, $http, $location, $route, PyramidService) => {
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
				$scope.pyramids = pyramids.data;
				$scope.submitted = true;
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
			function	: '',
			cause		: '',
			impact		: '',
			author		: '',
			chapter		: ''
		}

		$scope.submitted = false;
		$scope.reloadRoute = () => {
			$route.reload();
		}
		$scope.navigate = href => {
			$location.path(href);
		}
	})
