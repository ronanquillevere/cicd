const USERS_PATH = 'api/v1/users';

export class RestService {

    getUsers (){
        return this._fetchUsers().then(response =>
            response.json()
        );
    }

    _fetchUsers(){
        return fetch(this._buildGetUsersRequest());
    }

    _buildGetUsersRequest(){
        const reqParams = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        };

        return new Request(USERS_PATH, reqParams);
    }

}
