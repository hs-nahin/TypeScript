import { IsPlayer } from "../isPlayer/IsPlayer.js";

export class Couple implements IsPlayer {
  //   private name: string;
  //   private age: number;
  //   private city: string;

  //   constructor(n: string, a: number, c: string) {
  //     this.name = n;
  //     this.age = a;
  //     this.city = c;
  //   }
  constructor(public name: string, readonly age: number, public city: string) {}

  getProperty() {
    return this.city;
  }

  getAge() {
    return this.age;
  }

  wed() {
    console.log(`${this.name} is playing`);
  }
}
