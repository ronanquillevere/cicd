export class HelloView {

    constructor(){
        const body = document.querySelector('body');
        this.ul = document.createElement("UL");
        this.ul.id = "users";
        body.appendChild(this.ul);
    }

    displayUsers(users){
        users.map(user => {
            let l = document.createElement("LI");
            l.innerText = 'Hello, ' + user.name;
            return l;
        }).forEach(e => {
            return this.ul.appendChild(e);
        });
    }
}
