
function oddOrEven(x){
    if(x % 2 === 0){
        return "Even"
    }else{
        return "Odd"
    }
}

console.log(oddOrEven(2))

function greet(time, name){
    if(time < 600){
        return `Good night ${name}`
    }else if(time >= 600 && time < 1200){
        return `Good morning ${name}`
    }else if(time >= 1200 && time < 1500){
        return `Good afternoon ${name}`
    }else if(time >= 1500 && time < 1800){
        return `Good day ${name}`
    }else if(time >= 1800 && time < 2359){
        return `Good evening ${name}`
    }
}
console.log(greet(1500, "heritier"))