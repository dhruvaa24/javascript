// singleton object 

const tinderUser = new Object();
tinderUser.id = "123abc";
tinderUser.name = "dhruv";
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "abc@gmail.com",
    fullname : {
        userfullname: {
            firstname: "dhruv",
            lastname: "agrawal"
        }
    }
}

//console.log(regularUser.fullname.userfullname.firstname);


const obj1 = {
    1: "a",
    2: "b"
}

const obj2 = {
    3: "a",
    4: "b"
}

// adding two objects - same as array

//{} -> is the target object whereas obj1 and obj2 are source objects
//const obj3 = Object.assign({},obj1,obj2)
//console.log(obj3);

const obj3 = {...obj1, ...obj2};
// console.log(obj3);


//when data arrives from database it comes in this format
const users = [
    {
        id: 1,
        email: "d@gmail.com"
    },
    {
        id: 2,
        email: "a@gmail.com"
    },
    {
        id: 3,
        email: "q@gmail.com"
    }
]

// console.log(users[1].email)

console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser)); 
console.log(tinderUser.hasOwnProperty('isLoggedIn'));

