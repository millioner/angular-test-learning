app.directive('email', ['$interpolate', function($interpolate){
  return {
    scope: true,
    restrict: 'E',
    template: '<a href="mailto://{{email}}">{{email}}</a>',
    replace: true,
    transclude: true,
    link: function(scope, element, attrs, controller, transclusionFn) {
      transclusionFn(scope, function(clone) {
        scope.email = $interpolate(clone[0].innerHTML)(scope);
      });
    }
  };
}]);