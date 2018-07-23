import {PersonRepository} from './PersonRepository.js';
import {Router} from './Router.js';

export class App {
    constructor(xpApp, express){
            const router = new Router(xpApp, express);
            router.bindStatic('static');
            router.bindUsers(new PersonRepository());
            router.start(3000);
    }
}
