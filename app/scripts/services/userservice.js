'use strict';

/**
 * @ngdoc service
 * @name testTaskApp.usersResource
 * @description
 * # usersResource
 * Service in the testTaskApp.
 */
angular.module('testTaskApp')
	.service('usersResource', function ($resource, REST_API) {
		return $resource(REST_API+'users', {},
			{
				getEmail: {
					method:'GET',
					url:REST_API+'users/:login',
					params:{login:'login'},
				},

				getReposList: {
					method:'GET',
					url:REST_API+'users/:login/repos',
					params:{login:'login'},
					isArray: true
				},
				
				getBranches: {
					method:'GET',
					url:REST_API+'repos/:login/:repoName/branches',
					params:{login:'login', repoName: 'repoName'},
					isArray: true
				},

				getCommits: {
					method:'GET',
					url:REST_API+'repos/:login/:repoName/commits/:sha',
					params:{login:'login', repoName: 'repoName', sha:'sha'},
				},
			}
		)
	})
	.service('userDataService', function () {
		return {
			totalUserData: []
		}
	})
