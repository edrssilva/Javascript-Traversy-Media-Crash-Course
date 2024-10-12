// Variable definitions:
// - var, global scoped
// - let, block-level scoped, can be reasigned
// - const block-level scoped, can't be reassigned and needs to be initialized

// ALWAYS use const unless you know you will change the value of the variable

// Primitive data types:
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
