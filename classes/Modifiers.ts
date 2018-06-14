//private
class AnimalPrivate {
  private name: string;
  constructor(theName: string) {
    this.name = theName;
  }
}

class RhinoPrivate extends AnimalPrivate {
  constructor() {
    super("Rhino");
  }
}

class EmployeePrivate {
  private name: string;
  constructor(theName: string) {
    this.name = theName;
  }
}

let animal = new AnimalPrivate("Goat");
let rhino = new RhinoPrivate();
let employee = new EmployeePrivate("Bob");

animal = rhino;
// animal = employee; // Error: 'Animal' and 'Employee' are not compatible

//protected
class Person {
  protected name: string;
  constructor(name: string) {
    this.name = name;
  }
}

class Employee extends Person {
  private department: string;

  constructor(name: string, department: string) {
    super(name);
    this.department = department;
  }

  public getElevatorPitch() {
    return `Hello, my name is ${this.name} and I work in ${this.department}.`;
  }
}

let howard = new Employee("Howard", "Sales");
console.log(howard.getElevatorPitch());
// console.log(howard.name); // error
