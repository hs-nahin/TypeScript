import { Couple } from "./classes/Couple.js";
import { IsPlayer } from "./isPlayer/IsPlayer.js";

const a: (string | number)[] = ["Nahin"];
a.push("Mim");
a.push(1);
console.log(a);

// Class Object
let groom: IsPlayer;
groom = new Couple("Nahin", 25, "Dhaka");

const bride = new Couple("Mim", 21, "Dinajpur");

console.log(groom.city);
console.log(groom.getAge());

// Array of class
const couple: Couple[] = [];
couple.push(groom);
couple.push(bride);

// Using Interface in Function Parameter
interface RectangleOptions {
  width: number;
  height: number;
}

const drawSomething = (options: RectangleOptions) => {
  let width = options.width;
  let height = options.height;
};

drawSomething({
  width: 100,
  height: 100,
});

// Generics
// A generic function that takes an object with properties 'name' and 'age' and returns a new object with an added 'id' property
const addID = <T extends { name: string; age: number }>(obj: T) => {
  // Generate a random ID
  let id = Math.floor(Math.random() * 100);
  // Return a new object that includes all properties of the original object and adds a new 'id' property
  return { ...obj, id }; // Spread Operator is used to create a new object that includes all properties of the original object and adds a new 'id' property
};

// Create a user object and add an ID to it using the generic function
let user = addID({
  name: "Nahin",
  age: 25,
  city: "Dinajpur", // Additional property 'city' is allowed because the generic type T can have more properties than 'name' and 'age'
});

// Log the 'city' property of the user object
console.log(user.city); // Output: Dinajpur

// Generics with Interfaces
// Define an enum RType with four possible values
enum RType {
  SUCCESS,
  FAILURE,
  UNAUTHINTICATED,
  FORBIDDEN,
} // Enum for response types (e.g., success, failure, unauthenticated, forbidden)

// Define a generic interface APIResponse with a type parameter T
interface APIResponse<T> {
  status: number; // HTTP status code
  type: RType; // Response type (e.g., success, failure, unauthenticated, forbidden)
  data: T; // Data of type T, which makes this interface flexible
}

// Create an instance of APIResponse with T as object
const response1: APIResponse<object> = {
  status: 200, // HTTP status code indicating success
  type: RType.SUCCESS, // Response type indicating success
  data: {
    // Data of type object
    name: "Mim", // Name property
    age: 21, // Age property
  },
};
console.log(response1); // Output: { name: 'Mim', age: 21 }

// Tuples
let arr: [string, number, object] = ["Nahin", 25, { objBool: true }]; // An array of mixed types
arr.push("Mim", 21, { objBool: false }); // Pushing values to the array
console.log(arr); // Output: [ 'Nahin', 25, { objBool: true }, 'Mim', 21, { objBool: false } ]
