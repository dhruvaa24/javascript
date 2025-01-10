// for of

const arr = [1,2,3,4,5];
for (const val of arr) {
    //console.log(val);
}

const greetings = "Hello World";
for (const greet of greetings) {
    //console.log(`The value of char is ${greet}`);
}

//Maps

const map = new Map();
map.set('IN',"India");
map.set('US',"United States of America");
map.set('FR',"France");

//console.log(map);

for (const [key, value] of map) {
    //console.log(key, ':-', value);
}

const myObject = { // for of cant iterate objects so will give an error
    'game1': 'NFS',
    'game2': 'Spiderman'
}
// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);   
// }


