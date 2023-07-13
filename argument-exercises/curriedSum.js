
function curriedSum(numArgs) {
  let numbers = [];
  let sum = 0;
  return function _curriedSum(num) {
    numbers.push(num);
    if (numbers.length === numArgs){
      for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
      }
      return sum;
    }
    else {
      return _curriedSum;
    }
  }
}

// // Example array
// const numbers = [1, 2, 3, 4, 5];

// // Variable to store the sum
// let sum = 0;

// // Iterate over each element in the array


// // Output the sum
// console.log("The sum is: " + sum);


//          EXAMPLES

// function sumThree(num1, num2, num3) {
//     return num1 + num2 + num3;
//   }
  
//   sumThree(4, 20, 6); // == 30
  
//   // you'll write `Function#curry`!
  
//   let f1 = sumThree.curry(3); // tells `f1` to wait until 3 arguments are given before running `sumThree`
//   f1 = f1(4); // [Function]
//   f1 = f1(20); // [Function]
//   f1 = f1(6); // = 30
  
//   // or more briefly:
//   sumThree.curry(3)(4)(20)(6); // == 30



  const sum = curriedSum(4);

  // sum is a function

  console.log(sum(5)(30)(20)(1)); // => 56