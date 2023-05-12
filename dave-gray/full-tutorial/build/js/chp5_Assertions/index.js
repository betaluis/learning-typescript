"use strict";
// Type Assertions or Type Casting
// This comes into play when working in the DOM
// Convert to more or less specific
let a = "Hello";
let b = a;
let c = a;
let d = "World";
let e = "World";
const addOrConcat = (a, b, c) => {
    if (c = "add")
        return a + b;
    return "" + a + b;
};
// We're telling typescript that we know better than it in this example
let myVal = addOrConcat(2, 2, "concat");
// Be careful because TS sees no problem here - A string is returned
let nextVal = addOrConcat(2, 2, "add");
// The DOM
const img = document.querySelector("img");
const myImg = document.getElementById("#img");
img.src;
myImg.src;
