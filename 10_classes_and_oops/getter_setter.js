class User {
    constructor(email, password){
        this.email = email
        this.password = password
    }

    get password(){
        return `${this._password}dhruv`
    }

    set password(pass){
        this._password = pass.toUpperCase();
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email = value
    }
}

const dhruv = new User("dhruv@gmail.com", "abc")
console.log(dhruv.password)
console.log(dhruv.email)