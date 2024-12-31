const m_heros = ["thor", "ironman","spiderman"]

const dc_heros = ["batman", "superman","aquaman"]

// m_heros.push(dc_heros);
// console.log(m_heros); // creates an array within an array - as array can take any datatype so the second array becomes a whole index in outer array.
// console.log(m_heros[3][1]); //superman

const heros = m_heros.concat(dc_heros); // has a limitation that only two arrays can be merged at a time so we use spread operator which is more useful and used nowadays.
// console.log(heros);

// a more easy method to add two arrays is spread operator
const heros2 = [...m_heros, ...dc_heros]
// console.log(heros2);

const an_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const usable_an_array = an_array.flat(Infinity)
// console.log(usable_an_array);

console.log(Array.isArray("dhruv"));
console.log(Array.from("dhruv"));
console.log(Array.from({name: "dhruv"}));//gives an empty array as we need to specify the array type(keys or vlaues)

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));
