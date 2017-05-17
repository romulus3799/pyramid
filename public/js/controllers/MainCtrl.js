angular.module('MainCtrl', [])
	.controller('MainController', ($scope, $http, PyramidService) => {
		console.log("Into controller")

		//ESTABLISH SERVICES
		//get all pyramids
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
			application	: '',
			fn			: '',
			cause		: '',
			impact		: '',
			author		: '',
			chapter		: ''
		}
	})
