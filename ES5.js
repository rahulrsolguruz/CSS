// charAt();
let data = "this is data ";
console.log(data.charAt(0));

let stringstrim = "     this data has space       ";
console.log(stringstrim.trim());

// Array.isArray()

let checkArray = [10, 20, 30, 40, 50];
const check = Array.isArray(checkArray);
if (check) {
  console.log("yes! this is array");
} else {
  console.log("its not array ");
}

//Array forEach()
function DisVal(val) {
  console.log(val);
}
checkArray.forEach(DisVal);

//map()
//  add 5 each on all elements on array

const fiveData = checkArray.map((val) => {
  return val + 5;
});
console.log(fiveData);

// Array filter()

const fillterData = checkArray.filter((val) => {
  return val > 20;
});
console.log(fillterData);

// Array reduce()

const DataSum = checkArray.reduce((first, second) => {
  return first + second;
});

console.log(DataSum);

console.log(checkArray.indexOf(20));

let myObj = '{"name":"Rahul", "age":23, "city":"bhavnagar"}';
let MyNewObj = JSON.parse(myObj);
console.log(MyNewObj.name);
console.log(MyNewObj.age);

var obj = { name: "rahul", age: 23, city: "bhavnagar" };
let NewObj = JSON.stringify(obj);
console.log(NewObj);

const array = ["a", "b", "c"];
const arrayEntries = array.entries();

for (const element of arrayEntries) {
  console.log(element);
}

let mainUser = {
  fName: "rahul",
};
let copyMainUser = Object.assign(mainUser, { lName: "rathod" });
console.log(copyMainUser.fName);
console.log(copyMainUser.lName);

let newObje = Object.assign({}, copyMainUser);
console.log(newObje);
