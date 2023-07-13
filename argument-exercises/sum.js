function sum() {
    let total = 0;

    for (i=0; i < arguments.length; i++){
        total += arguments[i];
    }
    return total
}

function sumRest(...args) {
    let total = 0;
    for (i=0; i<args.length; i++){
        total += args[i];
    }
    return total
}

// console.log(sum(1,3,5,7))
console.log(sumRest(1,3,5,7))

