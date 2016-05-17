var app = angular.module('testApp', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider){
  $routeProvider
  .when('/', {
    templateUrl: '/src/views/homepage.html',
    controller: function($routeParams){ /* do nothing */ },
    controllerAs: 'homepage'
  })
  .when('/users', {
    templateUrl: '/src/views/users_list.html',
    controller: 'usersCtrl',
    controllerAs: 'users_ctrl'
  })
  .when('/contactus', {
    templateUrl: '/src/views/contactus.html',
    controller: function($routeParams){ /* do nothing */ },
    controllerAs: 'contactus'
  })
  .otherwise({'redirectTo': '/'})
}]);