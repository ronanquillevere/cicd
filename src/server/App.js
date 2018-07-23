import {UserRepository} from './UserRepository.js';
import {Router} from './Router.js';

export class App {
    constructor(xpApp, express){
            const router = new Router(xpApp, express);
            router.bindStatic('static');
            router.bindUsers(new UserRepository());
            router.start(3000);
    }
}
