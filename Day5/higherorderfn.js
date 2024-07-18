function repeatfn(fn,num){
    for (let i = 1; i <num+1; i++) {
        fn()
    }
}

let myName=()=>{
    console.log("My name is Ali");
}

repeatfn(myName,2)