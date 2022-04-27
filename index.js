let b;
b = 2 + 4;
c = 17 -9;
const exampleVar = new Promise ((resolve, reject) =>{
    console.log('Making request');

    if(b===7){
        resolve(console.log("success"));
    }else{
        reject(console.log("ERROR: request unsuccessful"))
    }
})
const exampleVar2 = new Promise ((resolve, reject)=>{
    if (c === 13 ) {
        resolve(console.log("success"))
    }else{
        reject (console.log("ERROR: request unsuccessful"))
    }
})