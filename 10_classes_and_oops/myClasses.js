// ES6

class User {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword(){
        return `${this.password}abc`
    }

    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const me = new User("dhruvaa", "dhruv@gmail.com", "12345")
console.log(me.encryptPassword());
console.log(me.changeUsername());


// behind the scene

function user(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;
}

user.prototype.encryptPassword = function(){
    return `${this.password}abc`
}

user.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const noone = new user("me", "me@gmail.com", "1234")
console.log(noone.encryptPassword());
console.log(noone.changeUsername());

