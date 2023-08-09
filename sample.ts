/*---------------TYPESCRIPT SAMPLE FEATURES AND USE CASES-------------------------------------------*/


/*----------------------------------------------*/
//1. Basic TypeScript Types:
/*----------------------------------------------*/


// Primitive Types
let age: number = 25;
let isActive: boolean = true;

// The 'any' Type
let dynamicValue: any = 5;
dynamicValue = "hello";

// Type Annotations
const greet = (person: string): string => {
  return "Hello, " + person;
}









/*----------------------------------------------*/
//2. Working with Complex Types:
/*----------------------------------------------*/


// Interfaces
interface Person {
  name: string;
  age: number;
}

const greetPerson = (person: Person): string => {
  return "Hello, " + person.name + "!";
}

// Type Aliases
type Point = { x: number; y: number };

const calculateDistance = (pointA: Point, pointB: Point): number => {
  return Math.sqrt((pointA.x - pointB.x) ** 2 + (pointA.y - pointB.y) ** 2);
}








/*----------------------------------------------*/
//3. Functions and Type Annotations:
/*----------------------------------------------*/


// Function Parameters and Return Types
const addNumbers = (a: number, b: number): number => {
  return a + b;
}

// Optional and Default Parameters
const greetWithMessage = (message: string, person?: string): string => {
  if (person) {
    return message + ", " + person;
  } else {
    return message;
  }
}








/*----------------------------------------------*/
//4. Union and Intersection Types:
/*----------------------------------------------*/

// Union Types
const displayValue = (value: number | string): void => {
  console.log("Value:", value);
}

// Intersection Types
interface Printable {
  print: () => void;
}

interface Loggable {
  log: () => void;
}

const displayAndLog = (item: Printable & Loggable): void => {
  item.print();
  item.log();
}








/*----------------------------------------------*/
//5. Generics in Functions:
/*----------------------------------------------*/

const identity = <T>(arg: T): T => {
  return arg;
}

let numValue = identity<number>(5);     // returns 5
let strValue = identity<string>("hello"); // returns "hello"

// Generics in Interfaces
interface Box<T> {
  value: T;
}

let numberBox: Box<number> = { value: 10 };
let stringBox: Box<string> = { value: "apple" };








/*----------------------------------------------*/
//6. Typescript class
/*----------------------------------------------*/

class UserProfile {
  // Properties
  private username: string;
  private age: number;
  private email: string;

  // Constructor
  constructor(username: string, age: number, email: string) {
    this.username = username;
    this.age = age;
    this.email = email;
  }

  // Method to display user profile
  displayProfile(): void {
    console.log(`Username: ${this.username}`);
    console.log(`Age: ${this.age}`);
    console.log(`Email: ${this.email}`);
  }
}

// Create an instance of UserProfile
const user1 = new UserProfile("john_doe", 30, "john@example.com");

// Call the method to display user profile
user1.displayProfile();










/*---------------EXAMPLES FOR WHERE TYPESCRIPT SAVE US-------------------------------------------*/

// 1. Type Mismatch Errors:
// Without TypeScript
const addWithoutTypeScript = (a, b) => {
  return a + b; // Concatenates strings instead of adding numbers
}

// With TypeScript
const addWithTypeScript = (a: number, b: number): number => {
  return a + b; // TypeScript catches potential type errors
}




//2. Property Access Errors:
// Without TypeScript
const userWithoutTypescript = { name: "Alice" };
console.log(userWithoutTypescript.age); // Accessing undefined property 'age'

// With TypeScript
interface User {
  name: string;
  age?: number;
}

const user: User = { name: "Alice" };
console.log(user.age); // TypeScript warns about undefined property access





//3. Null and Undefined Errors:
// Without TypeScript
let dataWithoutTypeScript;
console.log(dataWithoutTypeScript.length); // Runtime error: Cannot read property 'length' of undefined

// With TypeScript
let dataWithTypescript: string | undefined;
console.log(dataWithTypescript.length); // TypeScript warns about possible null or undefined access





//4. Refactor Safety:
// Without TypeScript
const calculateTotalWithoutTypeScript = (items) => {
  return items.reduce((sum, item) => sum + item.price, 0);
}

// With TypeScript
const calculateTotalWithTypeScript = (items: { price: number }[]): number => {
  return items.reduce((sum, item) => sum + item.price, 0);
}





//5. Function Parameter Mismatch:
// Without TypeScript
const greetWithoutTypeScript = (person, greeting) => {
  return `${greeting}, ${person}!`;
}

// With TypeScript
const greetWithTypeScript = (person: string, greeting: string): string => {
  return `${greeting}, ${person}!`;
}





//6. Type-Related Bugs:
// Without TypeScript
const swapWithoutTypeScript =(a, b) =>{
  const temp = a;
  a = b; // Mistakenly assigns 'a' to 'b'
  b = temp; // Mistakenly assigns 'b' to 'a'
}

// With TypeScript
const swapWithTypeScript =(a: number, b: string): void => {
  const temp = a;
  a = b; // TypeScript warns about incompatible types
  b = temp; // TypeScript warns about incompatible types
}






//7. Consistent Object Shapes:

// Without TypeScript
const user1WithoutTypeScript = { name: "Alice" };
const user2WithoutTypeScript = { username: "Bob" }; // Inconsistent object shape

// With TypeScript
interface User {
  name: string;
  username?: string;
}

const user1WithTypeScript: User = { name: "Alice" };
const user2WithTypeScript: User = { username: "Bob" }; // TypeScript enforces consistent shape
