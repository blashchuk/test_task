'use strict';

/**
 * @ngdoc function
 * @name testTaskApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the testTaskApp
 */
angular.module('testTaskApp')
	.controller('MainCtrl', ['$scope', 'usersResource', '$location', 'userDataService', function ($scope, usersResource, $location, userDataService) {

		$('.user-list').addClass('animated slideInLeft');

		$scope.loading = 0;
		function getAllUsers () {
			$scope.loading++;
			usersResource.query({}, function(data){
				userDataService.users = data;
				$scope.more(data);
				$scope.loading--;
			}, function(data){
				console.log(data);
				$scope.loading--;
			});
		}

		$scope.toProfilePage = function (user) {	
			$location.path('/profile/'+user.id);			
		}

		$scope.users = [];
		$scope.more = function () {
			var last = $scope.users.length + 5;
			for (var i = $scope.users.length; i < userDataService.users.length; i++) {
				if(i === last){break;}
				$scope.users.push(userDataService.users[i]);
			};
			userDataService.loadedUsers = $scope.users;
		}
		
		if(!userDataService.users){
			getAllUsers();
		}else{
			$scope.users = userDataService.loadedUsers;
		}

}]);
