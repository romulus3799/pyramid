(() => {
	'use strict'

	angular.module('MainCtrl', [])
		.controller('MainController', ($scope, $http) => {
			console.log("Into controller");
			$scope.formData = {}
			$scope.pyramids = []

			PyramidService.get('/api/pyramids')
				.success((data) => {
				$scope.pyramids = JSON.parse(data)
			})

			$scope.createPyramid = () => {
				$http.post('/api/pyramids', $scope.formData)
					.success((data) => {
						$scope.formData = {}
						$scope.todos = JSON.parse(data)
						console.log(data)
					})
					.error((data) => {
						console.log('Error: ' + data);
					})
			}

			$scope.deletePyramid = (id) => {
				$http.delete('/api/pyramids' + id)
					.success((data) => {
						$scope.pyramids = data
						console.log(data)
					})
					.error((data) => {
						console.log('Error: ' + data);
					})
			}

		})
})()
