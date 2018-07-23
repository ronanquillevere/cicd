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

    _buildGetUsersParams(){
        return {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        };
    }

    _buildGetUsersRequest(){
        return new Request(USERS_PATH, this._buildGetUsersParams());
    }

}
