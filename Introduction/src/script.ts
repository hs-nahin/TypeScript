const a: (string | number)[] = ["Nahin"];

a.push("Mim");
a.push(1);
console.log(a);

// Couple class
class Couple {
  name: string;
  age: number;
  city: string;

  constructor(n: string, a: number, c: string) {
    this.name = n;
    this.age = a;
    this.city = c;
  }
  play() {
    console.log(`${this.name} is playing`);
  }
}

const groom = new Couple("Nahin", 25, "Dhaka");
const bride = new Couple("Mim", 21, "Dinajpur");

console.log(groom.name);

// Array of class
const couple: Couple[] = [];
couple.push(groom);
couple.push(bride);
