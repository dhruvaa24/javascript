// for

// basic for loop
for (let i = 0; i < 10; i++) {
    const element = i+1;
    if(element ==5){
        //console.log("5 is best number");
    }
    //console.log(element);
}

//nesting of for loop
for (let i = 0; i <= 10; i++) {
    //console.log(`Outer loop value : ${i}`);
    
    for (let j = 0; j <=10; j++) {
        //console.log(`Inner Loop value ${j} and Outer loop ${i}`);
        //console.log(i + "*" + j + "=" + i*j);
    }  
}

let myArray = ["flash","batman","superman"]
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    //console.log(element);
}


// break continue

// for (let i = 1; i <=20 ; i++) {
//     if(i == 5){
//         console.log("Detected 5");
//         break;
//     }
//     console.log(`value of i is ${i}`);
// }
for (let i = 1; i <=20 ; i++) {
    if(i == 5){
        console.log("Detected 5");
        continue;
    }
    console.log(`value of i is ${i}`);
}