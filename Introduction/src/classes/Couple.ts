export class Couple {
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
