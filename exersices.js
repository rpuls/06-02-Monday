

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

// EX9 Classes and Inheritance with es2015
// A) The declaration below defines a Shape class, whicha as it's only properties has a color field +  a getArea() and a getPerimeter() 
// function which both returns undefined. This is the closest we get to an abstract method in Java.
console.log("\n EX9 A");
class Shape {
  constructor(color){
    this._color = color;
  }
  getColor() {
    return this._color;
  }
  setColor(newColor){
    this._color = newColor;
  }  
  getArea() {
    return undefined;
  }
  getPerimeter() {
    return undefined;
  }

  get color(){
    return this._color;
  }
}

var s1 = new Shape("red");
console.log(s1.getColor());
s1.setColor("blue");
console.log(s1.getColor());
// Provide the class with a nice (using template literals) toString() method  + a getter/setter for the colour property. Test the class constructor, the getter/setter and the two methods.


// B) Create a new class Circle that should extend the Shape class.
// Provide the class with:
// A radius field
// A constructor that takes both colour and radius.
// Overwritten versions of the three methods defined in the Base
// Getter/Setter for radius
// Test the class constructor, the getters/setters and the three methods.
console.log("\n EX9 B");
class Circle extends Shape {
  constructor(color, radius){
    super(color);
    this._radius = radius;
  }

  getRadius() {
    return this._radius;
  }
  setRadius(newRadius){
    this._radius = newRadius;
  }

  get radius(){
    return this._radius;
  }
}

var c1 = new Circle("pink",2);
console.log(c1.getColor()+c1.getRadius());
c1.setColor("teal");
c1.setRadius(20);
console.log(c1.getColor()+c1.getRadius());

// C) Create a new class Cylinder (agreed, not a perfect inheritance example) that should extend the Circle class.
// Provide the class with:
// A height field
// A constructor that takes colour, radius and height.
// Overwritten versions of the three methods defined in the Base (getPerimeter() should return undefined)
// A getVolume() method
// Getter/Setter for height
// Test the new class
console.log("\n EX9 C");
class Cylinder extends Circle {
  constructor(color, radius, height){
    super(color,radius);
    this._height = height;
  };
  
  getVolume(){
    return this._height * super.getRadius();
  }

  get volume(){
    return this._height * super.getRadius();
  } 
}

var cyl1 = new Cylinder("black",3,10);
console.log(cyl1.getVolume());


// D) The getX() methods (getArea(), getPerimeter() and getVolume()) are all candidates for a getter.
// Rewrite the three methods to use the getter syntax; that is console.log(circle.radius) instead of console.log(circle.getRadius())

console.log("\n EX9 D");
console.log(s1.color);
console.log(c1.radius);
console.log(cyl1.volume);

// EX10 - the iteration Protocols
// Skim the sections related to Iteration Protocols and implement (and understand) the two examples from the slides: 
// http://js-plaul.rhcloud.com/es2015_typescript/es5VStypescript.html#8 

console.log("\n EX10 - first example");

function makeIterator(array) {
  var nextIndex = 0;

  return {
    next: function () {
      return nextIndex < array.length ?
      {value: array[nextIndex++], done: false} :
      {done: true};
    }
  }
}
//Here we can do:
let it = makeIterator(['yo', 'ya']);
console.log(it.next().value); // 'yo'
console.log(it.next().value); // 'ya'
console.log(it.next().done);  // true

console.log("\n EX10 - second example");
function makeIterator2(array) {
  var itt= {};
  itt[Symbol.iterator] = function() {
    var nextIndex = 0;
    return {
      next: function () {
        return nextIndex < array.length ?
        {value: array[nextIndex++], done: false} :
        {done: true};
      }
    }
  }
  return itt;
}
//Here we can iterate using the for-of syntax:
var it2 = makeIterator2(['yo', 'ya']);
for(let i of it2){
  console.log(i);
}