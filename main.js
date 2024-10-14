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

// ---------------  ARRAYS  --------------- //
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

// ---------------  OBJECT LITERALS  --------------- //
// Object literals are key:value pairs, like an array, but instead of using int indexes, we can have meaningful names to the indexes

// We can use objects inside of objects
const myself = {
  firstName: "Eduardo",
  lastName: "Silva",
  age: 18,
  hobbies: ["Eletric Guitar", "Video games", "Chess"],
  address: {
    street: "Rua Paraná",
    number: "400",
    neighborhood: "Jardim Brasil",
    city: "Adamantina",
    state: "SP",
    postalCode: "17805-052",
  },
};

// To access a value, we use a dot ".", just like properties and brackets to get values inside of an array
const myFirstName = myself.firstName;
const myMainHobbie = myself.hobbies[1];
const myCity = myself.address.city;

// To deconstruct the values from the object to variables use the following syntax
const {
  firstName,
  lastName,
  address: { city },
} = myself;

// To add properties just assign them
myself.email = "jeduardo.rss@gmail.com";

console.log(myself);
console.log(`
    ${myFirstName}, ${myMainHobbie}, ${myCity}, 
    
    Desconstructed data: ${firstName} ${lastName} ${city}
    Added property: ${myself.email}
`);

// ARRAYS OF OBJECTS
const todos = [
  {
    id: 1,
    title: "Take out trash",
    description: "Throw the trash away",
    isCompleted: true,
  },
  {
    id: 2,
    title: "Study Javascript",
    description: "Continue the Traversy crash course",
    isCompleted: false,
  },
];

// Printing something out follows the same logic from above

console.log(todos);

console.log(todos[1].description);

/*

// ---------------  OBJECT LITERALS TO JSON  --------------- //
// The main difference between object literals syntax and JSON syntas is that json has a double quote "" surrounding the key and string values
// Heres an example

  OBJECT LITERAL
  const todosExample = [
    {
      id: 1,
      title: "Take out trash",
      description: "Throw the trash away",
      isCompleted: true,
    },
    {
      id: 2,
      title: "Study Javascript",
      description: "Continue the Traversy crash course",
      isCompleted: false,
    },
  ];

  JSON
  const todosJSONExample = [
    {
      "id":1,
      "title":"Take out trash",
      "description":"Throw the trash away",
      "isCompleted":true
    },
    {
      "id":2,
      "title":"Study Javascript",
      "description":"Continue the Traversy crash course",
      "isCompleted":false
    }
  ]


// To do the conversion:
const todosJSON = JSON.stringify(todos);
console.log(todosJSON);

// ---------------  FOR LOOPS  --------------- //
// Uses the same logic as other languages that I know
for (let i = 0; i < 10; i++) {
  console.log(`For loop counter: ${i}`);
}

// ---------------  WHILE LOOPS  --------------- //
// Uses the same logic as other languages that I know - set variable outside of the loop
let whileIteration = 0;

while (whileIteration < 10) {
  console.log(`While loop counter ${whileIteration}`);
  whileIteration++;
}

// ---------------  LOOP THROUGH ARRAYS --------------- //
// Not the nicest way of doing it.
for (let i = 0; i < todos.length; i++) {
  console.log(todos[i]);
}

// More readable way of iterating an array
for (let todo of todos) {
  console.log(todo);
}

// RECOMMENDED WAYS OF ITERATING THROUGH AN ARRAY

// ---------------  FOR EACH LOOPS  --------------- //
// Loops for each item in array, the function can have multiple params, but the first parameter needs the variable to iterate "each"
todos.forEach(function (todo) {
  console.log(todo);
});

// ---------------  MAP  --------------- //
// Create another array from an array
const todosMap = todos.map(function (todo) {
  return todo.text;
});

console.log(todosMap);

// ---------------  FILTER  --------------- //
// Create another array from an array based on a condition on return
const todosFilterComplete = todos.filter(function (todo) {
  return todo.isCompleted === true;
});

console.log(todosFilterComplete);

// To map a filtered array, we can use multiple methods at the same line
const todosFilterCompleteMap = todos
  .filter(function (todo) {
    return todo.isCompleted === true;
  })
  .map(function (todo) {
    return todo.text;
  });

*/

// ---------------  CONDITIONALS  --------------- //
// "=" means assigning a value | "==" checks if the value is equal independent of the type | "===" checks for value and the type
const conditinalValue = 10;

if (conditinalValue === 10) {
  console.log("The conditional value is 10.");
} else if (conditinalValue > 10) {
  console.log("The conditional value is greater than 10.");
} else {
  console.log("The conditional value is less than 10.");
}

// The OR operator "||" check if at least one condition is true
const orConditionValueA = 10;
const orConditionValueB = 20;

if (orConditionValueA > 10 || orConditionValueB > 10) {
  console.log("At least one value is greater than 10");
} else if (orConditionValueA === 10 || orConditionValueB === 10) {
  console.log("At least one value is equal to 10");
} else {
  console.log("Both of the values are less than 10");
}

// The AND operator "&&" check if all of the conditions are true
const andConditionValueA = 10;
const andConditionValueB = 20;

if (orConditionValueA > 10 && orConditionValueB > 10) {
  console.log("Both of the values are greater than 10");
} else if (orConditionValueA === 10 && orConditionValueB === 10) {
  console.log("Both of the values are equal to 10");
} else {
  console.log("At least one value is different than 10");
}

// ---------------  TERNARY OPERATOR  --------------- //
// The statement before the question mark is a condition, after the quesiton mark it goest like this:

// const value = condition === true ? valueIfTrue : valueIfFalse;

/* It's the same thing as:
  let = value;  

  if( condition === true) {
    value = valueIfTrue;
  } else {
    value = valueIfFalse;
  }
*/

const ternaryConditionValue = 10;

const ternaryColor = ternaryConditionValue === 10 ? "Green" : "Red";

console.log(`The ternary operator result color is: ${ternaryColor}`);

// ---------------  SWITCHS  --------------- //
// Switches replace the need of having a lot of ifs and else ifs by checking "case"s
// The default case happens if none of the cases where true

const switchIDValue = 1;
let switchResultUser = "";

switch (switchIDValue) {
  case 1:
    switchResultUser = "Eduardo";
    break;
  case 2:
    switchResultUser = "Lucas";
    break;
  case 3:
    switchResultUser = "Bruno";
    break;
  case 4:
    switchResultUser = "Victor";
    break;
  case 5:
    switchResultUser = "Nicolas";
    break;
  default:
    console.log(`Invalid user ID: ${switchIDValue}`);
    break;
}

if (!switchResultUser.length == 0) {
  console.log(`Username: ${switchResultUser}`);
}

// ---------------  FUNCTIONS  --------------- //
// Declare the function, with or withour parameters, if you assign the values on the parameters, it's gonna act like an default value, and those can be overwriten
function AddNumbers(num1 = 0, num2 = 0) {
  return num1 + num2;
}

// Call the function
console.log(`Sum of the numbers: ${AddNumbers(1, 3)}`);

// ARROW FUNCTIONS
const addNumbersArrow = (num1 = 0, num2 = 0) => {
  return num1 + num2;
};

console.log(
  `Sum of the numbers on the arrow function: ${addNumbersArrow(1, 3)}`
);

// If the arrow function has only one statement, the function can be writen as follows:
const addNumbersArrowStatementReduced = (num1 = 0, num2 = 0) =>
  console.log(num1 + num2);

// And if it only returns something AND is only a single statement:
const addNumbersArrowReturnReduced = (num1 = 0, num2 = 0) => num1 + num2;

// Not finished yet, if it has only a single parameter, can be writen in the following way:
// And if it only returns something AND is only a single statement, ignore the params parenthesis, it's my VS CODE extension putting it in, works without them:
const addNumbersArrowParameterReduced = (num1) => num1 + 10;
