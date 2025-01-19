class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){
        return `123`
    }
}

const dhruv = new User("dhruv")
// console.log(dhruv.createId());

class Teacher extends User{
    constructor(username, email){
        super(username)
        this.enail = email;
    }
}

const hitesh = new Teacher("hitesh","hitesh@gmail.com")
hitesh.logMe();
console.log(hitesh.createId());