import { Couple } from "./classes/Couple.js";
const a = ["Nahin"];
a.push("Mim");
a.push(1);
console.log(a);
// Couple class with access modifier
// Object of class
const groom = new Couple("Nahin", 25, "Dhaka");
const bride = new Couple("Mim", 21, "Dinajpur");
console.log(groom.city);
// Array of class
const couple = [];
couple.push(groom);
couple.push(bride);
