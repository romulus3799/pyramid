angular.module('MainCtrl', [])
	.controller('MainController', ($scope, $http, PyramidService) => {
		console.log("Into controller")
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
		}
		$scope.pyramids = []

		PyramidService.get().then((pyramids) => {
			console.log(pyramids.data);
			$scope.pyramids = pyramids.data
		})

		$scope.createPyramid = () => {
			$http.post('/api/pyramids', $scope.formData)
				.success((pyramids) => {
					//clear form, update data
					$('#pyr-form').find('input[type=text]').val('')
					$scope.pyramids = pyramids.data
				})
				.error((data) => {
					console.log('Error: ' + data)
				})
		}

		$scope.deletePyramid = (id) => {
			$http.delete('/api/pyramids/' + id).then((pyramids,err) => {
				$scope.pyramids = pyramids.data
				if (err) {console.log(err);}
			})
		}

	})
