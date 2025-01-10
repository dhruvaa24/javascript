const myObject = {
    js: 'javascript',
    cpp: 'c++',
    py: 'python'
}

for (const key in myObject) {
    //console.log(`${key} shortcut is for ${myObject[key]}`);
}

const prog = ['js','py','java','cpp'];
for (const key in prog) {
    //console.log(key,':-',prog[key]); // arrays key are its indices
}

// const map = new Map(); // maps are uniterable and cant be iterated using for in loop
// map.set('IN',"India");
// map.set('US',"United States of America");
// map.set('FR',"France");

// for (const key in map) {
//     console.log(key);
//}