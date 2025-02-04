export class Couple {
    //   private name: string;
    //   private age: number;
    //   private city: string;
    //   constructor(n: string, a: number, c: string) {
    //     this.name = n;
    //     this.age = a;
    //     this.city = c;
    //   }
    constructor(name, age, city) {
        this.name = name;
        this.age = age;
        this.city = city;
    }
    wed() {
        console.log(`${this.name} is playing`);
    }
}
