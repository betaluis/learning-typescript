"use strict";
// Classes
// A bit repetative
// ---------------------------------
// class Coder {
//     name: string; // These are called properties or members of the class. Typescript does not like it if you don't have the property both here and in the contructor.
//     music: string;
//     age: number;
//     lang: string;
// 
//     constructor(
//         name: string,
//         music: string,
//         age: number,
//         lang: string,
//     ) {
//         this.name = name;
//         this.music = music;
//         this.age = age;
//         this.lang = lang;
//     }
// }
// A better solution with a visibility modifier
// --------------------------------------------
class Coder {
    // Using the visibility modifier in the constructor
    constructor(name, music, age, lang = "Typescript") {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    getAge() {
        return `Hello, I am ${this.age} years old.`;
    }
}
const Luis = new Coder("Luis", "hiphop", 27);
// You can access a method that gets a private value, but can't access the private/protected value itself.
console.log({ "Luis age": Luis.getAge() });
// console.log(Luis.age);
// console.log(Luis.lang);
class WebDev extends Coder {
    constructor(computer, 
    // notice that we don't have to use the visibility modifiers from the parent class.
    name, music, age) {
        // We have to call the super class constructor when extending a class and accessing the parent class properties.
        super(name, music, age);
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        return `I write ${this.lang}`;
    }
}
const Sara = new WebDev("Mac", "Sara", "Lofi", 25);
console.log({
    name: Sara.name,
    age: Sara.getAge(),
    music: Sara.music,
    computer: Sara.computer,
    lang: Sara.getLang()
});
class Guitarist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action} the ${this.instrument}`;
    }
}
const Page = new Guitarist("Jimmy Page", "guitar");
console.log({
    name: Page.name,
    instrument: Page.instrument,
    action: Page.play("strums")
});
// -------------------------------------------------------
// What does the static keyword do?
// ---------------------------------
// Shared by all instances of a class.
// Accessed without instantiating the class.
// Accessed using the class name.
// ex: ClassName.staticMethod()
// Example
// ---------------------------------
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
}
Peeps.count = 0; // This is a static property. It is shared by all instances of the class.
const John = new Peeps("John");
const Steve = new Peeps("Steve");
const Amy = new Peeps("Amy");
console.log({
    count: Peeps.count,
    John: { name: John.name, id: John.id },
    Steve: { name: Steve.name, id: Steve.id },
    Amy: { name: Amy.name, id: Amy.id },
});
/* output:
    {
        count: 3,
        John: { name: 'John', id: 1 },
        Steve: { name: 'Steve', id: 2 },
        Amy: { name: 'Amy', id: 3 }
    }
*/
class Bands {
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) && value.every(element => typeof element === "string")) {
            this.dataState = value;
            return;
        }
        else
            throw new Error("Param is not an array of strings");
    }
}
const myBands = new Bands();
myBands.data = ["Led Zep", "21 Pilots", "Maroon 5"];
console.log({ data: myBands.data });
myBands.data = [...myBands.data, "ZZ Top"];
console.log({ data2: myBands.data });
// myBands.data = ["Van Halen", 5150]; // Throws an error
