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

/* console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser)); 
console.log(tinderUser.hasOwnProperty('isLoggedIn')); */

/**********Destructuring array**********/

const course = {
    courseName: "js in hindi",
    price: 999,
    courseInstructor: "dhruv"
}

const {courseInstructor: instructor} = course; 
console.log(instructor); //we can directly access objects values and can also rename the keys if we want


/********json structure*********/

// while fetching any api we can get it in the formta of object or array as follows 
// {
//     "name": "dhruv",
//     "courseName": "js in hindi",
//     "price": "free"
// }

// [
//     {},
//     {},
//     {}
// ]

