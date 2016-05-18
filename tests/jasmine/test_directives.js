// complete directive testing example here - https://github.com/vojtajina/ng-directive-testing

describe('Unit testing directives', function() {
  var $compile,
      $rootScope;

  beforeEach(module('testApp'));

  beforeEach(inject(function(_$compile_, _$rootScope_){
    $compile = _$compile_;
    $rootScope = _$rootScope_;
  }));

  it('Replaces the element with the appropriate content', function() {
    var element = $compile("<email>user@example.com</email>")($rootScope);

    $rootScope.$digest();
    expect(element[0].outerHTML).toEqual(
      '<a href="mailto://user@example.com" class="ng-scope ng-binding">user@example.com</a>'
    );
  });
});