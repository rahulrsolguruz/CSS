// The let keyword

let data = 10;
console.log(data);

//The const keyword
//The const keyword allows you to declare a constant (a JavaScript variable with a constant value).
const PI = 3.14;
console.log(PI);

// Arrow Functions
/* Arrow functions allows a short syntax for writing function expressions.

You don't need the function keyword, the return keyword, and the curly brackets.
*/
const x = (x, y) => x * y;

// The Spread (...) Operator
// The ... operator expands an iterable (like an array) into more elements:

let data1 = [10, 20, 30];
let data2 = [40, 50];
let data3 = [...data1, ...data2];
console.log(data3);

// for of
let data4 = [10, 20, 30, 40, 50];
function foroflogic() {
  sum = 0;
  for (let val of data4) {
    sum += val;
  }
  return sum;
}
console.log(foroflogic());

// Map
const arr = [1, 2, 3, 4, 4, 5, 6, 7, 7, 7];
const unique = [...new Set(arr)];
console.log(unique);

//
