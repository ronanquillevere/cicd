/* eslint-env node, mocha */
/* global expect*/

import {RestService} from '../../src/client/RestService.js';

describe('Test RestService', function () {
    'use strict';

    let restService;

    beforeEach(function () {

    });

    it('get the correct param for users request', function () {

        // Given
        restService = new RestService();

        // When
        const param = restService._buildGetUsersParams();

        // Then
        expect(param.method).to.equal('GET');
        expect(param.headers['Content-Type']).to.equal('application/json');
    });

});
