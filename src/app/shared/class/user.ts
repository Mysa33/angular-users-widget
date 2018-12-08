export class User {
    data: any;
    constructor(user: any) {
        this.data = user;
    }
    set() {
        return "Hello, " + this.data;
    }
}

let user = new User("world");
