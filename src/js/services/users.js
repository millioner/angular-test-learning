app.factory('appUsers', ['$http', function($http){

  var _data = {list: []};

  function _deserialize(data){
    user = angular.copy(data);
    user.group = 'buyer';
    return user;
  }

  return {
    data: _data,
    getList: function(){
      return $http({method: 'GET', url: '/data/users.json'})
              .then(function(response){
                list = [];
                angular.forEach(response.data, function(value, key){
                  this.push(_deserialize(value));
                }, list);
                _data.list = list;
              });
    }
  };
}])