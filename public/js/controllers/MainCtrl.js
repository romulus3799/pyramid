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
			PyramidService.create($scope.formData)
				.success((pyramids) => {
					//clear form, update data
					$('#pyr-form').find('input[type=text]').val('')
					$scope.pyramids = pyramids.data
				})
				.error((data) => {
					console.log('Error: ' + data)
				})
		}

		$scope.updatePyramid = (id) => {
			// TODO: all of this, add http post
			PyramidService.update(id, $scope.formData)
				.success((pyramids) => {
					$scope.pyramids = pyramids.data
				})
				.error((data) => {
					console.log('Error: ' + data);
				})
		}

		$scope.deletePyramid = (id) => {
			PyramidService.delete(id).then((pyramids,err) => {
				$scope.pyramids = pyramids.data
				if (err) {console.log(err)}
			})
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
			$scope.formData.name = pyramid.name
			$scope.formData.context = pyramid.context
			$scope.formData.contrast = pyramid.contrast
			$scope.formData.example = pyramid.example
			$scope.formData.application = pyramid.application
			$scope.formData.fn = pyramid.fn
			$scope.formData.cause = pyramid.cause
			$scope.formData.impact = pyramid.impact
			$scope.formData.author = pyramid.author
			$scope.formData.chapter = pyramid.chapter
		}
	})
