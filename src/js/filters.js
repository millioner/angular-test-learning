app.filter('capitalize', function() {
    return function(input) {
      var res = [];
      angular.forEach(input.split(' '), function(s){
        this.push(
          (angular.isString(s) && s.length > 0)
          ? s[0].toUpperCase() + s.substr(1).toLowerCase() 
          : s
        );
      }, res);
      return res.join(' ');
    };
});