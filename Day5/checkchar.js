let char=(str,char)=>{

for (let i = 0; i < str.length; i++) {
    if (str[i]===char) {
        return true;
    }
    
    
}
return false;
}

console.log(char("akbar","b"));