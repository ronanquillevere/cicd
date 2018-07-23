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

var UserRepository = function () {
    function UserRepository() {
        classCallCheck(this, UserRepository);
    }

    createClass(UserRepository, [{
        key: "getUsers",
        value: function getUsers() {
            return [{ name: "John Doe" }, { name: "Charlie Chaplin" }];
        }
    }]);
    return UserRepository;
}();

/* eslint-env node, mocha */

describe('Test UserRepository', function () {

    var userRepository = void 0;

    beforeEach(function () {});

    it('should check the users are correct', function () {

        // Given
        userRepository = new UserRepository();

        // When
        var users = userRepository.getUsers();

        // Then
        expect(users).to.eql([{ name: "John Doe" }, { name: "Charlie Chaplin" }]);
    });
});
