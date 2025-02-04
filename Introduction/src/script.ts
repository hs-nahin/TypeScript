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
