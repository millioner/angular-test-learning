app.controller('usersCtrl', ['$scope', 'appUsers', function($scope, appUsers){
  $scope.users = appUsers;
  $scope.users.getList();
}]);
