import * as ROUTE from './Routes.js';

export class Router {

    constructor(xpApp, express){
        this.xpApp = xpApp;
        this.express = express;
    }

    bindStatic(staticPath){
        this.xpApp.use(this.express.static(staticPath));
    }

    bindUsers(personRepository){
        this.xpApp.get(ROUTE.USERS, (req, res) => {
            res.json(personRepository.getPersons());
        });
    }

    start(port){
        this.xpApp.listen(port
            // , () => console.log('Example app listening on port 3000!')
        );
    }
}
