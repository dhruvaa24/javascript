// arrays

const myArray = [0,1,2,3,4,5] // can have diff datatypes

// arrays provide shallow copy - ie heap memory is there . if we change copied arrays original array will also get changed

// are resizable 

// console.log(myArray[0]);

const myArr = new Array(0,1,2,3,4,5);

/*********Methods*******/

myArr.push(6);
// console.log(myArr);

myArr.pop()
// console.log(myArr);

myArr.unshift(9);
// console.log(myArr);

myArr.shift();
// console.log(myArr);

// console.log(myArr.includes(8)); //boolean return type
// console.log(myArr.indexOf(3));

const newArr = myArr.join(); //converts whole array is string
// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);

// slice, splice

console.log("A", myArr);

const myn1 = myArr.slice(1,3)
console.log(myn1);
console.log("B",myArr); // original array is not changed

const myn2 = myArr.splice(1,3);
console.log(myn2);
console.log("C",myArr);

