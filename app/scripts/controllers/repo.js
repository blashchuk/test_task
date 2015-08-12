'use strict';

/**
 * @ngdoc function
 * @name testTaskApp.controller:RepoCtrl
 * @description
 * # RepoCtrl
 * Controller of the testTaskApp
 */
angular.module('testTaskApp')
  .controller('RepoCtrl', ['$scope', 'usersResource', 'userDataService', '$routeParams',
  	function ($scope, usersResource, userDataService, $routeParams) {
    
  		$('.repo').addClass('animated slideInLeft');

		for (var i = 0; i < userDataService.userReposList.length; i++) {
			var oneRepo = userDataService.userReposList[i];
			if(oneRepo.id == $routeParams.id){
  				$scope.repo = oneRepo;
  				getBranches(oneRepo);
  				break;
			}
		};

		function getBranches (repo) {
			usersResource.getBranches({login: repo.owner.login, repoName: repo.name}, function(data){
					$scope.branches = data
				}, function(data){
					console.log(data);
				});
		}

  }]);
