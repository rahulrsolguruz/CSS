// normal function with function keyword
function sayHello() {
  console.log("hello!");
}

// function expression
const sayHello = function sayHello() {
  console.log("Hello From function expression");
};

// function call
sayHello();

//Function hoisting
console.log(sayHello());
console.log(sayHello);
function sayHello() {
  console.log("say Hello");
}

// arrow function
const data = () => {
  console.log("get data !");
};
