'use strict';

describe('Directive: emailDirective', function () {

  // load the directive's module
  beforeEach(module('testTaskApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<email-directive></email-directive>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the emailDirective directive');
  }));
});
