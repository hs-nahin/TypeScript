const a: (string | number)[] = ["Nahin"];

a.push("Mim");
a.push(1);
console.log(a);

// Couple class with access modifier
class Couple {
  //   private name: string;
  //   private age: number;
  //   private city: string;

  //   constructor(n: string, a: number, c: string) {
  //     this.name = n;
  //     this.age = a;
  //     this.city = c;
  //   }
  constructor(
    private name: string,
    private age: number,
    readonly city: string
  ) {}
  wed() {
    console.log(`${this.name} is playing`);
  }
}

// Object of class
const groom = new Couple("Nahin", 25, "Dhaka");
const bride = new Couple("Mim", 21, "Dinajpur");

// Array of class
const couple: Couple[] = [];
couple.push(groom);
couple.push(bride);
