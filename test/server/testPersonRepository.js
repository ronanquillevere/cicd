/* eslint-env node, mocha */
/* global expect*/
import {UserRepository} from '../../src/server/UserRepository.js';

describe('Test UserRepository', function () {
    'use strict';

    let userRepository;



    beforeEach(function () {

    });




    it('should check the users are correct', function () {

        // Given
        userRepository = new UserRepository();

        // When
        const users = userRepository.getUsers();

        // Then
        expect(users).to.eql([
            {name : "John Doe"},
            {name : "Charlie Chaplin"}
        ]);
    });

});
