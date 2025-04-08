class MyClass {
  constructor(public name: string) {}

  sayHello() {
    console.log(`Hello, I am ${this.name}!`);
  }
}

const myObject = new MyClass("World");
myObject.sayHello();
