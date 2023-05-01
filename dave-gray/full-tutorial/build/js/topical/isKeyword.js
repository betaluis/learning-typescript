"use strict";
// In this example, we have a function called isFish
// that takes a parameter called pet. The pet parameter
// is of type Fish | Bird, which means it can be either
// a Fish or a Bird. The pet is Fish syntax is called a
// type predicate and it tells TypeScript that if the
// function returns true, the pet parameter is of type
// Fish.
const isFish = (pet) => {
    return pet.swim !== undefined;
};
// More examples
const isNum = (x) => {
    return typeof x === "number";
};
const isStr = (x) => {
    return typeof x === "string";
};
const padLeft = (value, padding) => {
    if (isNum(padding)) {
        return Array(padding + 1).join(" ") + value;
    }
    if (isStr(padding)) {
        return padding + value;
    }
    throw new Error(`Expected string or number, got '\${padding}'`);
};
