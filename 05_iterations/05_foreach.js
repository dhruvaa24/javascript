const coding = ['js','rb','java','cpp','py'];

coding.forEach( function (item) {
    //console.log(item);
} )

coding.forEach((item)=>{
    //console.log(item);
}) 

function printMe(itm){
    //console.log(itm);
}

coding.forEach(printMe)

coding.forEach((item,index,arr)=>{ // for each loop doesnt only contain the values of the array but also contains the indexes and arrays whole list which van be passed as the paramter of the function.
    console.log(item,index,arr);
})

const myCode = [
    {
        langName:'Javascript',
        langFileName: 'js'
    },
    {
        langName: 'Java',
        langFileName: 'Java'
    },
    {
        langName: 'python',
        langFileName: 'py'
    }
]

myCode.forEach((item)=>{
    console.log(item.langName);
})