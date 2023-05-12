// Type Assertions or Type Casting
// This comes into play when working in the DOM

type One = string;
type Two = string | number;
type Three = "Hello";

// Convert to more or less specific
let a: One = "Hello";
let b = a as Two;
let c = a as Three;

let d = <One>"World";
let e = <string | number>"World";

const addOrConcat = (a: number, b: number, c: "add" | "concat"): number | string => {
    if (c = "add") return a + b;
    return "" + a + b;
}

// We're telling typescript that we know better than it in this example
let myVal: string = addOrConcat(2,2,"concat") as string;

// Be careful because TS sees no problem here - A string is returned
let nextVal: number = addOrConcat(2,2,"add") as number;

// The DOM
const img = document.querySelector("img")!;
const myImg = document.getElementById("#img") as HTMLImageElement;

img.src;
myImg.src;
