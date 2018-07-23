import {RestService} from './RestService.js';
import {HelloView} from './HelloView.js';

const restService = new RestService();
const helloView = new HelloView();

restService.getUsers().then(users => helloView.displayUsers(users));
