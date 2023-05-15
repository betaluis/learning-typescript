"use strict";
/**
 * Primitive types: string, number, and boolean
 *
 * Always use lowercase.
 *
 */
let myName = "Luis";
let age = 27;
let arrayOfNames = ["luis", "mike", "lauren", "katherine"];
let arrayOfNumbers = [1, 2, 3, 4, 5];
// For arrays you will also see Array<number> or Array<string>
////////////////////////////////
/////////// Functions //////////
////////////////////////////////
// Paramater type annotation
function greet(name) {
    console.log("Hello" + myName.toUpperCase() + "!!");
}
// Cannot do greet(42) because the argument is type checked and isn't a string.
// Retrun type annotation
const getFavoriteNumber = (number) => 7;
////////////////////////////////
/////////// Objects ////////////
////////////////////////////////
// The paramete's type annotation is an object type
function printCoord(pt) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 3, y: 8 });
////////////////////////////////////////////
/////////// Optional Properties ////////////
////////////////////////////////////////////
function printName(obj) {
    // --- One way of doing this ---
    // console.log(`Hello ${obj.first} ${obj.last ? obj.last : ""}`)
    var _a;
    // --- Alternatively ---
    console.log(`Hello ${obj.first} ${(_a = obj.last) === null || _a === void 0 ? void 0 : _a.toString()}`);
}
printName({ first: "Bob" }); // ok
printName({ first: "Alice", last: "Alisson" }); // ok
