
/**
 * Primitive types: string, number, and boolean
 * 
 * Always use lowercase.
 * 
 */

let myName:string = "Luis";

let age:number = 27

let arrayOfNames: string[] = ["luis", "mike", "lauren", "katherine"];

let arrayOfNumbers: number[] = [1, 2, 3, 4, 5];

// For arrays you will also see Array<number> or Array<string>


////////////////////////////////
/////////// Functions //////////
////////////////////////////////

// Paramater type annotation
function greet(name: string) {
    console.log("Hello"+ myName.toUpperCase() + "!!")
}

// Cannot do greet(42) because the argument is type checked and isn't a string.

// Retrun type annotation
const getFavoriteNumber = (number: number): number => 7;

////////////////////////////////
/////////// Objects ////////////
////////////////////////////////

// The paramete's type annotation is an object type
function printCoord(pt: {x: number; y: number}) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 3, y: 8});

////////////////////////////////////////////
/////////// Optional Properties ////////////
////////////////////////////////////////////

function printName(obj: {first: string, last?: string}): void {
    
    // --- One way of doing this ---
    // console.log(`Hello ${obj.first} ${obj.last ? obj.last : ""}`)

    // --- Alternatively ---
    console.log(`Hello ${obj.first} ${obj.last?.toString()}`)
}
printName({first: "Bob"}); // ok
printName({first: "Alice", last: "Alisson"}); // ok



