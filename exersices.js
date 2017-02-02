

//ex 1 - constants
const PI = 3.141593;
PI > 3.0;
console.log(PI);

//Block-Scoped Variables
var a = [1,2,3,4];
var b = ["a","b","c"];

for (let i = 0; i < a.length; i++) {
    let x = a[i]
    console.log(x)
}
for (let i = 0; i < b.length; i++) {
    let y = b[i]
    console.log(y)
}

let callbacks = []
for (let i = 0; i <= 2; i++) {
    callbacks[i] = function () { return i * 2 }
}
console.log(callbacks[0]() === 0)
console.log(callbacks[1]() === 2)
console.log(callbacks[2]() === 4)

//Block-scoped function definitions.
{
    function foo () { return 1 }
    console.log(foo() === 1)
    {
        function foo () { return 2 }
        console.log(foo() === 2)
    }
    console.log(foo() === 1)
}

//ex 2 a1
var evens = [2,4,6,8];
odds  = evens.map(v => v + 1)
console.log(odds)
pairs = evens.map(v => ({ even: v, odd: v + 1 }))
console.log(pairs)
nums  = evens.map((v, i) => v + i)
console.log(nums)


//ex 2 a2) Why does this work?:  
var odds = evens.map(v => v+1);
console.log(odds)
//while this doesn't (fix the example below, without going back to the solution above)?
// var odds = evens.map(v => {
//     v+1
//     });
var odds = evens.map(v => {
     return v+1 //function must return when it is within a scope.
    });
console.log(odds)

// EX3 arrow functions and this
// A) 
// For this exercise you should refer to this slide (http://js-plaul.rhcloud.com/javascript1/js.html#19 ) as a reference to ES5 this-pitfalls.
// Use the Constructor function in the example below, to explain about the ES5 this-behaviour. Execute the example, and solve the problem, 
// first using ES5 features, and then using an es2015 arrow function.

// function Numbers(numbs) {
//   this.nums = numbs;
//   this.fives = [];
//   this.nums.forEach(function (v) {
//     if (v % 5 === 0) {
//       this.fives.push(v);
//     }
//   });
// }
// var numbers = new Numbers([1,3,5,10,14,20,33,50]);
// console.log(numbers.fives);

//es5
function Numbers(numbs) {
  var self = this;
  this.nums = numbs;
  this.fives = [];
  this.nums.forEach(function (v) {
    if (v % 5 === 0) {
      self.fives.push(v);
    }
  });
}
var numbers = new Numbers([1,3,5,10,14,20,33,50]);
console.log(numbers.fives);

//es2015 style
function Numbers(numbs) {
  this.nums = numbs;
  this.fives = [];
  this.nums.forEach(v => {
    if (v % 5 === 0) {
      this.fives.push(v);
    }
  });
}
var numbers = new Numbers([1,3,5,10,14,20,33,50]);
console.log(numbers.fives);

// B) Arrow functions and this or when not to use arrow functions
// This example (taken from the slide referred to above), shows how we "loose" this, when extracting a method from an object.
// var counter = {
//     count: 0,
//     inc: function () {
//       this.count++;
//     }
//   }
// var func = counter.inc; //Store "reference" to inc
// func();
// console.log(counter.count); //Still zero
// counter.inc();
// console.log(counter.count); //Now one
// Rewrite the inc() function to use the arrow notation, and test whether this; solves the problem, makes it worse or leaves it unchanged.
// Ref: Do ES6 Arrow Functions Really Solve “this” In JavaScript? 

var counter = {
    count: 0,
    inc: () => {
      this.count++;
    }
  }
var func = counter.inc; //Store "reference" to inc
func();
console.log(counter.count); //Still zero
counter.inc();
console.log(counter.count); //still zero !!!!!!!! worse, no.

// EX-4 Template literals
// Execute this example And use template literals whenever it makes sense for all the following exercises.

var customer = { name: "Foo" }
var card = { amount: 7, product: "Bar", unitprice: 42 }
var message = `Hello ${customer.name},
want to buy ${card.amount} ${card.product} for
a total of ${card.amount * card.unitprice} bucks?`
console.log(message);

// EX-5 - Rest Parameter and the spread operator
// A) Implement the function f(..) below:
// function f(x,y,...rest){
//   ...
// }
// So this statement: 
// 	console.log(f(5,2,true,2,"hello World",[1,2,3],new Date(),{}));

// Will produce this output (should obviously work for any number/type of arguments):
// Sum: 7 ???????
// rest value 1 is a: Boolean
// rest value 2 is a: Number
// rest value 3 is a: String
// rest value 4 is a: Array
// rest value 5 is a: Date
// rest value 6 is a: Object
// Hint: With es2015 you can get the class name using this construct: myinstance.constructor.name

function f(x,y,...rest){
  return rest;
}
//So this statement: 
	console.log(f(5,2,true,2,"hello World",[1,2,3],new Date(),{}));

// B) Test the rest operator using the code below:
// var rest = [true,2,"hello World",[1,2,3],new Date(),{}];
// var restParams = [ ...rest];
// console.log(f(5,2,...restParams));

var rest = [true,2,"hello World",[1,2,3],new Date(),{}];
var restParams = ["test", ...rest];
console.log(restParams);
console.log(f(5,2,...restParams));
console.log(f(5,2,...rest));

// C) What will this line produce?   var chars = [... f(5,2,...restParams)];
restParams = [...rest];
var chars = [... f(5,2,...restParams)];
console.log(chars);

// EX-6
// Assuming we had these variables (for example passed in via a HTTP request):
let fName = "Kurt";
let lName = "Wonnegut";
let age = 98

// Create an object, using the Property Shorthand notation with a fName, lName and age property.

var person = {fName,lName,age};
console.log(person);

// EX7 Destructing Assignment
// A) Given these declarations: let fName = "Kurt", lName = "Wonnegut";

// Implement a one-liner (using Array matching) to swap the two values so this statement:
// console.log(`First: ${fName}, Last: ${lName}`);
// Will print: First: Wonnegut, Last: Kurt

[fName, lName] = [lName, fName]; //this is array matching.
console.log(`First: ${fName}, Last: ${lName}`);

// B) Given the method below

function getPerson(){
  return {
    firstName: "Kurt",
    lastName: "Wonnegut",
    gender : "Male",
    email: "kurt@wonnegut.dk",
    phone: "12345",
  }
}
// Implement a one-liner (using the object matching shorthand notation) that will initialize (only) two variables lastName and phone.

let {lastName, phone} = getPerson();

console.log(`Last name: ${lastName} phone: ${phone}`);

// EX-8 – ES2015 Modules
// Rewrite the f(..) method from EX5 into a reusable es2015 module, and import the function into a new file and test.
// Hint: Since you are using Node, Node will think of this as one of its own modules and look into node_modules for the module unless you do the usual "./myModule" for your own modules

var fpack = require('./fpack');
console.log(fpack.f(1,5,7));