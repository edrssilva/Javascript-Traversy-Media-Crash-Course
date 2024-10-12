// ---------------  VARIABLE DEFINITIONS   --------------- //
// - var, global scoped
// - let, block-level scoped, can be reasigned
// - const block-level scoped, can't be reassigned and needs to be initialized

// ALWAYS use const unless you know you will change the value of the variable

// ---------------  PRIMITIVE DATA TYPES   --------------- //
// String, Numbers, Booleans, null, undefined

//String:
const fullName = "Eduardo Silva";

//Number:
const age = 18; // Integer value
const height = 1.72; // Decimal value

//Boolean:
const isCool = true;

//null:
const x = null; // There is a variable, but there's nothing in it

//Undefined:
const y = undefined; // Explicitly defined the undefined value
let z; // Implicitly defined the undefined value by not assigning a value

// You can check the type of a variable using "typeof" followed by the variable name:
console.log(
  typeof fullName,
  typeof age,
  typeof height,
  typeof isCool,
  typeof x,
  typeof y,
  typeof z
);

// ---------------  CONCATENATION   --------------- //
const oldConcatenation =
  "My name is " + fullName + " and I'm " + age + " years old."; // Old way

//Template string: use back ticks -> ` `
const modernConcatenation = `My name is ${fullName} and I'm ${age} years old.`; // ES6 way 😎

console.log(modernConcatenation);

// ---------------  STRING METHODS   --------------- //

// Properties don't need parenthesis, methods does.

const helloWorld = "Hello World";

// Get the length of the string
const helloWorldLength = helloWorld.length;

// Change cases
const helloWorldCases = [
  helloWorld.toUpperCase(),
  helloWorld.toLowerCase(),
  helloWorld.toLocaleUpperCase(),
  helloWorld.toLocaleLowerCase(),
];

// Get a substring from the string - syntax: stringName.substring(int startIndex, int endAtIndex)
const helloFromHelloWorld = helloWorld.substring(0, 5);

// We can also use more than one method at a time
const upperHelloFromHelloWorld = helloWorld.substring(0, 5).toUpperCase();

// Split a string into an array
const helloWorldArrayByLetter = helloWorld.split(""); // To split by letter we use a empty string as the method parameter
const helloWorldArrayBySpace = helloWorld.split(" "); // To split by any other text, use the text as the method parameter

console.log(
  `
  String length: ${helloWorldLength}
  String cases: ${helloWorldCases}
  Substring: ${helloFromHelloWorld}
  Upper cased substring: ${upperHelloFromHelloWorld}
  Splited into array by letter: ${helloWorldArrayByLetter}
  Splited into array by space: ${helloWorldArrayBySpace}
  `
);

// ---------------  ARRAYS   --------------- //
// Arrays are variables that hold multiple values
// We can change values inside a const array, add and remove indexes, but we can't reassign it

const oldNumbersArray = new Array(1, 2, 3, 4, 5); // Not standard way, using the array constructor
const newNumbersArray = [1, 2, 3, 4, 5]; // Standard way

// We can use multiple data types inside an JS array
const mixedTypesArray = [1, 2, "apple", "orange", true, false, null];

// To access an single value of the array, use the index inside brackets
const valueInsideMixedArray = newNumbersArray[3];

// To change a single value, do the same thing
mixedTypesArray[5] = true;

// To add a new value without hard coding the index
mixedTypesArray.push(undefined); // At the end, use the push method
mixedTypesArray.unshift(0); // At the start, use the unshift method

// To remove the last index, use the pop function
mixedTypesArray.pop();

// To check if something is an array use the Array class with the isArray method
const notAnArray = "I'm not an array";
const indeedAnArray = ["I'm", "an", "array"];

const areThoseArrays = [
  Array.isArray(notAnArray),
  Array.isArray(indeedAnArray),
];

// To get an index of a certain value, use the indexOf method
const mixedTypesArrayNullValueIndex = mixedTypesArray.indexOf(null);

console.log(mixedTypesArray, areThoseArrays, mixedTypesArrayNullValueIndex);
