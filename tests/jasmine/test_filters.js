describe('capitalize filter', function() {
  beforeEach(module('testApp'));
  
  var $filter;

  beforeEach(inject(function(_$filter_){
    $filter = _$filter_;
  }));

  it('makes first word letter capitalized', function() {
    var capitalize = $filter('capitalize');
    expect(capitalize('foo bar')).toEqual('Foo Bar');
    expect(capitalize('FOO BAR')).toEqual('Foo Bar');
  });

});
