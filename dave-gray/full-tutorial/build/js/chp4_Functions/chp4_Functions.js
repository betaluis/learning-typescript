"use strict";
////////////////////////////////////////
//            Type aliases            //
////////////////////////////////////////
// This is the difference between types and interfaces
// can't do this:
// interface postId = stringOrNumber;
////////////////////////////////////////
//           Literal Types            //
////////////////////////////////////////
let myName;
// myName = "Luis"; // Error
// myName = "Dave"; // OK
let username;
username = "Amy"; // username has to be one of the 4 strings above.
// Step 2: Create an object of type `Person` and assign it values for each property.
const person = {
    name: "Luis",
    age: 27,
    email: "luis@email.com",
};
// Step 3: 
// Write a function `printPerson` that takes a parameter of type
// `Person` and logs the person's information to the console.
// function printPerson(person: Person) {
//     console.log(`Hello ${person.name}! You are ${person.age} years old, and your email is ${person.email}.`);
// }
// Step 4: Call the `printPerson` function with the `person` object as an argument.
console.log("");
// printPerson(person);
console.log("");
////////////////////////////////////////
//              Functions             //
////////////////////////////////////////
const add = (a, b) => {
    return a + b;
};
const logMsg = (message) => {
    console.log(message);
};
logMsg("Hello!");
logMsg(add(2, 3));
let substract = function (c, d) {
    return c - d;
};
let multiply = function (c, d) {
    return c * d;
};
// Optional paramaters
// Required parameters come first
const addAll = (a, b, c) => {
    if (typeof c !== "undefined") {
        return a + b + c;
    }
    return a + b;
};
// Default paramaters
const sumAll = (a, b, c = 2) => {
    return a + b + c;
};
// Rest parameters
const total = (...nums) => {
    return nums.reduce((prev, curr) => prev + curr);
};
logMsg({
    "add": add(2, 3),
    "addAll": addAll(2, 3),
    "sumAll": sumAll(2, 3),
    "total": total(1, 2, 3, 4),
});
const returnPerson = (person) => {
    return `From functions: Hello ${person.name}! You are ${person.age} years old, and your email is ${person.email}.`;
};
const printPerson = (person) => {
    console.log(`From functions: Hello ${person.name}! You are ${person.age} years old, and your email is ${person.email}.`);
};
printPerson(person);
// Step 3: Create an array of `Person` objects with at least 3 elements.
// Solution to step 3
const people = [
    {
        name: "Luis",
        email: "luis@email.com",
        age: 28,
    },
    {
        name: "Lauren",
        email: "lauren@email.com",
        age: 26,
    },
    {
        name: "Lillie",
        email: "lillie@email.com",
        age: 0,
    },
];
// Step 4: Iterate over the array and call the `printPerson` function for each element.
// Bonus step: Create a new array of `Person` objects using the `map` function and log the 
// result to the console.
console.log("");
console.log("///////////// People Iteration /////////////");
console.log("");
people.map((person, index) => console.log(index, returnPerson(person)));
console.log("");
// -------------- Never -----------------
// I forgot why I put never here..... 
const createError = (errMsg) => {
    throw new Error(errMsg);
};
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
        if (i > 10)
            break;
    }
};
// Custom type guard
const isNumber = (value) => {
    return typeof value === "number"
        ? true : false;
};
// Use of the never type
const numberOrString = (value) => {
    if (typeof value === "string")
        return "string";
    if (isNumber(value))
        return "number";
    return createError("You never want to do this");
};
////////////////////////////////////////////////
//          Type Guarding Challenge           //
////////////////////////////////////////////////
/*
Step 1: Define an interface called `Vehicle` that has the following properties:
- `type` (a string)
- `model` (a string)
- `year` (a number)
- `seats` (a number)

Step 2: Define two interfaces that extend `Vehicle`:
- `Car`, which has an additional property `numDoors` (a number)
- `Motorcycle`, which has an additional property `hasFairing` (a boolean)

Step 3: Write a function called `printVehicle` that takes a parameter of type `Vehicle` and returns nothing.
The function should log the vehicle's type, model, year, and number of seats to the console.

Step 4: Create an array of `Vehicle` objects that includes at least one `Car` object and one `Motorcycle` object.

Step 5: Iterate over the array and call the `printVehicle` function for each element.

Step 6: Write a function called `isCar` that takes a parameter of type `Vehicle` and returns a boolean.
The function should return `true` if the vehicle is a `Car` and `false` otherwise.

Step 7: Write a function called `printNumDoors` that takes a parameter of type `Vehicle` and returns nothing.
The function should check if the vehicle is a `Car` using the `isCar` function.
If the vehicle is a `Car`, the function should log the number of doors to the console.

Step 8: Call the `printNumDoors` function for each element in the array of `Vehicle` objects.

Bonus step: Create a new array that includes only the `Car` objects from the original array using the
`filter` function.
*/
// ---
// First attempt
/*
interface Vehicle {
    type: string;
    model: string;
    year: number;
    seats: number;
}

interface Car extends Vehicle {
    numDoors: number;
}

interface Motorcycle extends Vehicle {
    hasFairing: boolean;
}

const hasItems = (obj: unknown): boolean => {
    return typeof obj === "object" && obj !== null && Object.keys(obj).length > 0;
}

const printVehicle = (vehicle: Vehicle): void => {
    if (hasItems(vehicle)) {
        const { type, model, year, seats } = vehicle;
        console.log({
            type,
            model,
            year,
            seats,
        })
    } else {
        console.log("Item must be an object");
    }
};

const vehicles: Array<Vehicle | Car | Motorcycle> = [
    {
        type: "Car",
        model: "Nissan",
        seats: 4,
        year: 2012,
        numDoors: 4,
    },
    {
        model: "Outlander",
        type: "Car",
        seats: 5,
        year: 2016,
        numDoors: 4,
    },
    {
        model: "Yamaha",
        type: "Motorcycle",
        seats: 2,
        year: 2022,
        hasFairing: true,
    },
]

vehicles.map(vehicle => printVehicle(vehicle));

// 6
const isCar = (vehicle: Vehicle): vehicle is Car => {
  return (vehicle as Car).numDoors !== undefined;
}
const isMotorcycle = (vehicle: Vehicle): vehicle is Motorcycle => {
  return (vehicle as Motorcycle).hasFairing !== undefined;
}

// 7
const printNumDoors = (vehicle: Vehicle | Car | Motorcycle): void => {
    if (isCar(vehicle)) {
        console.log({ "From printNumDoors": vehicle.numDoors });
    }
}

// 8
console.log("");
console.log("/////////// Print The Number of Doors for Each Vehicle ////////////");
vehicles.map(v => printNumDoors(v));
console.log("");

const cars = vehicles.filter(v => isCar(v));
console.log("");
console.log("/////// Filtered Cars ////////");
console.log("");
console.log(cars);
*/
