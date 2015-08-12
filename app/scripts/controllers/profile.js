'use strict';

/**
 * @ngdoc function
 * @name testTaskApp.controller:ProfileCtrl
 * @description
 * # ProfileCtrl
 * Controller of the testTaskApp
 */
angular.module('testTaskApp')
	.controller('ProfileCtrl', ['$scope', '$routeParams', 'usersResource', 'userDataService',
	 function ($scope, $routeParams, usersResource, userDataService) {

	 	$('.profile').addClass('animated slideInLeft');

		function getUserRepos(user) {
			usersResource.getReposList({login: user.login}, function (reposList) {
				$scope.repos = reposList;
				userDataService.userReposList = reposList;
			}, function (err) {
				console.log(err)
			});
		}
		
		for (var i = 0; i < userDataService.totalUserData.length; i++) {
			var user = userDataService.totalUserData[i];
			if(user.id == $routeParams.id){
  				$scope.user = user;
  				getUserRepos(user);
  				break;
			}
		};

	}]);
