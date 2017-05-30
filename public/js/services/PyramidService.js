angular.module('PyramidService', [])
	.factory('PyramidService', ['$http', ($http) => {

		return {
			get : () => {
				return $http.get('/pyramid/api/pyramids')
			},

			create : (pyrData) => {
				return $http.post('/pyramid/api/pyramids', pyrData)
			},

			update : (id, pyrData) => {
				return $http.post('/pyramid/api/pyramids/' + id, pyrData)
			},

			delete : (id) => {
				return $http.delete('/pyramid/api/pyramids/' + id)
			},

			getChapters : () => {
				return $http.get('../../data/chapters.txt')
			}
		}
	}])
