"use strict";
// let username = "Luis";
// console.log(username);
let x = 2;
// let b: string = 6;
let y = 3;
// console.log(a/b);
// --------------------------------------------------------------------
// --------------------------------------------------------------------
// --------------------------------------------------------------------
// ------------------------ Objects ------------------------ //
// const exampleObj = {
//     prop1: "Dave",
//     prop2: true,
// }
// exampleObj.prop1 = "Luis"
// ------------ objects review ------------ //
const exampleObj = {
    prop1: "Luis",
    prop2: true,
};
console.log("//////////////////// Create object ///////////////////");
console.log("");
console.log({ prop1: exampleObj.prop1, prop2: exampleObj.prop2 });
console.log("");
// Review challenge: Create two objects that contain family information; one with members count and one without.
// ------------------------------------------------------------------------------------------------------------------------------------
const betancourt = {
    members: ["Luis", "Lauren", "Lillie"],
    familyName: "Betancourt",
    membersCount: 3,
};
const lujan = {
    familyName: "Lujan",
    members: ["Uri", "Ingrid", "Ona"]
};
console.log("/////////////// Create type family challenge ///////////////");
console.log("");
console.log({ lujan, betancourt });
console.log("");
////////////////////////////////////////////////////////////////////////////////////////
// Now create a function that returns a greet to the family passed in as a parameter. // 
////////////////////////////////////////////////////////////////////////////////////////
const greetFamily = (family) => {
    return `Greetings ${family.familyName} family!`;
};
console.log("/////////////// Greet family challenge ///////////////");
console.log("");
console.log({ greeting: greetFamily(betancourt) });
console.log({ greeting: greetFamily(lujan) });
console.log("");
/////////////////////////////////
///           Enums           ///
/////////////////////////////////
console.log("/////////// Enums ///////////");
// In TypeScript, an `enum` is a special data type that allows you to define 
// a set of named constants, where each constant is assigned an integer value. 
/*
enum Color {
  Red,
  Green,
  Blue
}

let myColor: Color = Color.Green;
console.log(myColor); // Output: 1

---
In this example, we define an enum `Color` with three named constants:
`Red`, `Green`, and `Blue`. By default, each constant is assigned a value
starting at 0 and incrementing by 1. We then create a variable `myColor` of
type `Color` and assign it the value `Color.Green`, which has a numeric
value of 1. When we log `myColor` to the console, it outputs the numeric value 1.

Enums can be useful for creating a set of constants that represent a group of
related values. They can also make your code more readable and maintainable
by giving meaningful names to numeric values. Additionally, enums can be used
in switch statements and as the type of function parameters, making it easier
to work with them in your code.
---

*/
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 1] = "U";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
console.log("");
console.log({
    U: Grade.U,
    D: Grade.D,
    C: Grade.C,
    B: Grade.B,
    A: Grade.A
});
console.log("");
