const User = {
    _email: 'd@da.com',
    _password: "abcde",

    get email(){
        return this._email.toUpperCase();
    },

    set email(value){
        this._email = value;
    }
}

const dhruv = Object.create(User)
console.log(dhruv.email)