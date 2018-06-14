//Boolean Example
let isDone: boolean = false;

//Number Example
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

//String Example
let color: string = "blue";
color = "red";
//Template String
let fullName: string = `Bob Bobbington`;
let age: number = 37;
let sentence: string = `Hello, my name is ${fullName}.
I'll be ${age + 1} years old next month.`;

//Array Example
let list: number[] = [1, 2, 3];
//Generics Way
let listGen: Array<number> = [1, 2, 3];

//Tuple Example
let mytuple = [10, "Hello", 20, 20, "World!"];

//Enums Example
enum Color {
  Red,
  Green,
  Blue
}
let c: Color = Color.Green;
//Index will start at 0
enum ColorIndex {
  Red = 1,
  Green,
  Blue
}
let c1: Color = Color.Green;
//Get Enum value using index
enum ColorGet {
  Red = 1,
  Green,
  Blue
}
let colorName: string = Color[2];

//Any Example
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean
let notSureNew: any = 4;
notSure.ifItExists(); // okay, ifItExists might exist at runtime
notSure.toFixed(); // okay, toFixed exists (but the compiler doesn't check)

//Void Example
function warnUser(): void {
  alert("This is my warning message");
}

//Null & Undefined Example
let u: undefined = undefined;
let n: null = null;
