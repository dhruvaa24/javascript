let myName = "dhruv     ";
let mySName = "agrawal    "


//console.log(myName.length);

let myHeros = ["thor", "hulk"]

let heroPower = {
    thor: "hammer",
    hulk: "strength",

    getThorPower: function(){
        console.log(`Thor power is ${this.thor}`)
    }
}

Object.prototype.dhruv = function(){
    console.log("dhruv is present in all objects")
}

Array.prototype.heyDhruv = function(){
    console.log("dhruv says hello")
}

//heroPower.dhruv()
//myHeros.dhruv()

// myHeros.heyDhruv();
// heroPower.heyDhruv();

// inheritance
// this approach is outdated
const user = {
    name: "hello",
    email: "hello@gmail.com"
}

const teacher = {
    makeVideo: true
}

const teachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS Assignment',
    fullTime: true,
    __proto__: teachingSupport
}

teacher.__proto__ = user;

// modern syntax
Object.setPrototypeOf(teachingSupport, teacher)

let anotherUserName = "dhruv     "

String.prototype.truelength = function(){
    console.log(`${this}`)
    console.log(`true length is : ${this.trim().length}`)
}

anotherUserName.truelength()
"agrawal ".truelength()