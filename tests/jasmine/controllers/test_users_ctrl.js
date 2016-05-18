describe('User list controller', function () {
  beforeEach(module('testApp'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
  }));

  describe('$scope.users', function() {
    it('inits users service', function() {
      var $scope = {};
      var controller = $controller('usersCtrl', { $scope: $scope, appUsers: {getList: function(){}} });
      
      expect($scope.bbb).toEqual(1);
    });
  });
});