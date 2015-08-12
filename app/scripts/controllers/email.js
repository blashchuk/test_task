'use strict';

/**
 * @ngdoc function
 * @name testTaskApp.controller:EmailCtrl
 * @description
 * # EmailCtrl
 * Controller of the testTaskApp
 */
angular.module('testTaskApp')
  .controller('EmailCtrl', ['$scope', 'usersResource', 'userDataService',
   function ($scope, usersResource, userDataService) {
    
   	function getUserEmail () {
	  	usersResource.getEmail({login: $scope.login}, function (userData) {
				$scope.email = userData.email;
				userDataService.totalUserData.push(userData)
			}, function (err) {
				console.log(err)
			});
   	}

  	if(userDataService.totalUserData.length == $scope.usersLength){
	  	for (var i = 0; i < userDataService.totalUserData.length; i++) {
	  		if(userDataService.totalUserData[i].login == $scope.login){
	  			$scope.email = userDataService.totalUserData[i].email;
	  			break
	  		}
	  	};
  	}else{
  		getUserEmail()
  	}


  }]);
