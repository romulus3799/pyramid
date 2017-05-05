angular.module('PyramidService', [])
	.factory('PyramidService', ['$http', ($http) => {

		return {
			get : () => {
				return $http.get('/api/pyramids')
			},

			create : (pyrData) => {
				return $http.post('/api/pyramids', pyrData)
			},

			delete : (id) => {
				return $http.delete('/api/nerds' + id)
			}
		}
	}])
