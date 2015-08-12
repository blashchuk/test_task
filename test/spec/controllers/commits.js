'use strict';

describe('Controller: CommitsCtrl', function () {

  // load the controller's module
  beforeEach(module('testTaskApp'));

  var CommitsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CommitsCtrl = $controller('CommitsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CommitsCtrl.awesomeThings.length).toBe(3);
  });
});
