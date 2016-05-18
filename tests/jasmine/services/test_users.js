describe('Users service', function () {
  beforeEach(module('testApp'));

  var $http, appUsers;

  beforeEach(function(){
    fixture.setBase('../../data');
    this.result = fixture.load('users.json');
  });

  // load app services (app modules)
  beforeEach(inject(function(_$httpBackend_, _appUsers_) {
    $http = _$httpBackend_;
    appUsers = _appUsers_;
  }));

  describe('receives users list', function() {
    it('makes http request', function() {
      $http.when('GET', '/data/users.json').respond(this.result);    
      appUsers.getList().then(function(response){
        expect(appUsers.data.list.length).toEqual(this.result.length);
      });
    });
  });
});