'use strict';

/**
 * @ngdoc directive
 * @name testTaskApp.directive:emailDirective
 * @description
 * # emailDirective
 */
angular.module('testTaskApp')
	.directive('emailDirective', function () {
		return {
			template: '<p>{{email}}</p>',
			restrict: 'A',
			replace: true,
			controller: 'EmailCtrl',
			scope: {
				login: '=',
				usersLength: '='
			}
		};
	});
