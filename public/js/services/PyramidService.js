angular.module('PyramidService', [])
	.factory('PyramidService', ['$http', ($http) => {

		return {
			get : () => {
				return $http.get('/api/pyramids')
			},

			create : (pyrData) => {
				return $http.post('/api/pyramids', pyrData)
			},

			update : (id, pyrData) => {
				return $http.post('/api/pyramids/' + id, pyrData)
			},

			delete : (id) => {
				return $http.delete('/api/pyramids/' + id)
			}
		}
	}])
