var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var USERS_PATH = 'api/v1/users';

var RestService = function () {
    function RestService() {
        classCallCheck(this, RestService);
    }

    createClass(RestService, [{
        key: 'getUsers',
        value: function getUsers() {
            return this._fetchUsers().then(function (response) {
                return response.json();
            });
        }
    }, {
        key: '_fetchUsers',
        value: function _fetchUsers() {
            return fetch(this._buildGetUsersRequest());
        }
    }, {
        key: '_buildGetUsersParams',
        value: function _buildGetUsersParams() {
            return {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            };
        }
    }, {
        key: '_buildGetUsersRequest',
        value: function _buildGetUsersRequest() {
            return new Request(USERS_PATH, this._buildGetUsersParams());
        }
    }]);
    return RestService;
}();

/* eslint-env node, mocha */

describe('Test RestService', function () {

    var restService = void 0;

    beforeEach(function () {});

    it('get the correct param for users request', function () {

        // Given
        restService = new RestService();

        // When
        var param = restService._buildGetUsersParams();

        // Then
        expect(param.method).to.equal('GET');
        expect(param.headers['Content-Type']).to.equal('application/json');
    });
});
