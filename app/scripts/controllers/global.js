'use strict';

/**
 * @ngdoc function
 * @name testTaskApp.controller:GlobalCtrl
 * @description
 * # GlobalCtrl
 * Controller of the testTaskApp
 */
angular.module('testTaskApp')
  .controller('GlobalCtrl', ['$scope', '$location', '$window', function ($scope, $location, $window) {
    
  	$scope.back = function () {
  		if($location.path() == '/') return
  		$window.history.back()
  	}


  }]);
