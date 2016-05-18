app.controller('usersCtrl', ['$scope', 'appUsers', function($scope, appUsers){
  $scope.users = appUsers;
  $scope.users.getList();

  $scope.bbb = 1;  // dummy stuff for unit tests
}]);
