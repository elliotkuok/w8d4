

Function.prototype.curry = function(numArgs) {
    const args = [];
    const that = this;

    return function _curry(arg) {
        args.push(arg);
        if (args.length === numArgs){
            return that.apply(null, args); // call the original function // test null
            // return that(...args);
        }
        else {  // too few arguments still
            return _curry;    // return 'itself'
        }
    }
};

// Function.prototype.curry2 = function(numArgs) {
//     const args = [];
//     const that = this;

//     return function _curry2 = (arg) => {
//         args.push(arg);
//         if (args.length === numArgs){
//             return that(...args);
//         }
//         else {
//             return _curry2;    // return 'itself'
//         }
//     }

// };

function multiplier(){
    sum = 0;
    for (i=0;i<arguments.length;i++){
        sum += arguments[i];
    }
    return sum
}

function sum(a, b, c) {
    return a + b + c;
  }
  
//   const curriedSum = sum.curry(3);
//   console.log(curriedSum(1)(2)(3)); // Output: 6
//   console.log(curriedSum(1, 2)(3)); // Output: 6
//   console.log(curriedSum(1)(2, 3)); // Output: 6
//   console.log(curriedSum(1, 2, 3)); // Output: 6

//   const curriedMult = multiplier.curry(4);

    // console.log(curriedMult(1)(3)(2)(1)(2)); // Output: Undefined
//   console.log(curriedMult(1)(2, 3)); // Output: Undefined
//   console.log(curriedMult(3)); // Output: Undefined
//   console.log(curriedMult(2)); // Output: 36

// let f1 = multiplier.curry(3); // tells `f1` to wait until 3 arguments are given before running `sumThree`
let f1 = multiplier.curry(4);
console.log(f1 = f1(3)); // [Function]
console.log(f1 = f1(3)); // [Function]
console.log(f1 = f1(2)); // [Function]
console.log(f1 = f1(5)); // = 13