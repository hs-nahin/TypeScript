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
