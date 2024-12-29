//  Dates in Javascript

// let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toJSON());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

let myCreatedDate = new Date(2024,0,23)
//console.log(myCreatedDate.toDateString());

let myDate2 = new Date(2025,0,1,0,0,0);
//console.log(myDate2.toLocaleString());

let myDate3 = new Date("01-14-2025");
//console.log(myDate3.toLocaleString());

let myTimeStamp = Date.now()
//console.log(myTimeStamp);
//console.log(myDate2.getTime());

//console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate.getFullYear());
// console.log(newDate.getDay());
// console.log(newDate.getMonth());

const nowDate = newDate.toLocaleString('default',{
    // weekday: "long",
    dateStyle: "full"
})
console.log(nowDate);