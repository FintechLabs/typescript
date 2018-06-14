class GreeterNew<T> {
  greeting: T;
  constructor(message: T) {
    this.greeting = message;
  }
  greet() {
    return this.greeting;
  }
}

let greeterNew = new GreeterNew<string>("Hello, world");

console.log(greeterNew.greeting);
