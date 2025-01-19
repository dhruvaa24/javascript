class User {
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User {
    constructor(username, email, password){
        super(username);
        this.email = email;
        this.password = password;
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`)
    }
}

const teach = new Teacher("dhruv", "teach@teacher.com", "123")
teach.addCourse();
teach.logMe()
console.log(teach instanceof Teacher)

const newUser = new User("hellooo");
// newUser.addCourse() // doesnt have access
newUser.logMe()
console.log(teach instanceof User)
