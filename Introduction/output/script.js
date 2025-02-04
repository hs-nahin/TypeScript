import { Couple } from "./classes/Couple.js";
const a = ["Nahin"];
a.push("Mim");
a.push(1);
console.log(a);
// Class Object
let groom;
groom = new Couple("Nahin", 25, "Dhaka");
const bride = new Couple("Mim", 21, "Dinajpur");
console.log(groom.city);
console.log(groom.getAge());
// Array of class
const couple = [];
couple.push(groom);
couple.push(bride);
const drawSomething = (options) => {
    let width = options.width;
    let height = options.height;
};
drawSomething({
    width: 100,
    height: 100,
});
// Generics
// A generic function that takes an object with properties 'name' and 'age' and returns a new object with an added 'id' property
const addID = (obj) => {
    // Generate a random ID
    let id = Math.floor(Math.random() * 100);
    // Return a new object that includes all properties of the original object and adds a new 'id' property
    return Object.assign(Object.assign({}, obj), { id }); // Spread Operator is used to create a new object that includes all properties of the original object and adds a new 'id' property
};
// Create a user object and add an ID to it using the generic function
let user = addID({
    name: "Nahin",
    age: 25,
    city: "Dinajpur", // Additional property 'city' is allowed because the generic type T can have more properties than 'name' and 'age'
});
// Log the 'city' property of the user object
console.log(user.city); // Output: Dinajpur
// Create an instance of APIResponse with T as object
const response1 = {
    status: 200, // HTTP status code indicating success
    type: "good", // Type of response
    data: {
        // Data of type object
        name: "Mim", // Name property
        age: 21, // Age property
    },
};
