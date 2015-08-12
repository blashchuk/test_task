'use strict';

/**
 * @ngdoc function
 * @name testTaskApp.controller:CommitsCtrl
 * @description
 * # CommitsCtrl
 * Controller of the testTaskApp
 */
angular.module('testTaskApp')
  .controller('CommitsCtrl', ['$scope', '$routeParams', 'usersResource',
   function ($scope, $routeParams, usersResource) {
    
    $('.commits').addClass('animated slideInLeft');

    var params = {login:$routeParams.login, repoName: $routeParams.repo, sha:$routeParams.sha}

    usersResource.getCommits(params, function(data){
			$scope.commits = data
		}, function(data){
			console.log(data);
		});

  }]);
