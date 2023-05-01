// Classes

// A bit repetative
// ---------------------------------
// class Coder {
//     name: string;
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
// ---------------------------------
class Coder {
    secondLang!: string; // beginners might want to stay away from this.

    constructor(
        public readonly name: string,
        public music: string,
        private age: number,
        protected lang: string = "Typescript",
    ) {}

    public getAge() {
        return `Hello, I am ${this.age} years old.`;
    }
}

const Luis = new Coder("Luis", "hiphop", 27);
// You can access a method that gets a private value, but can't access the private/protected value itself.
console.log({ "Luis age": Luis.getAge() });
// console.log(Luis.age);
// console.log(Luis.lang);

class WebDev extends Coder {
    constructor(
        public computer: string,
        name: string,
        music: string,
        age: number,
    ) {
        super(name, music, age)
        this.computer = computer;
    }
    
    public getLang() {
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
// console.log(Sara.age);
// console.log(Sara.lang);

// -------------------------------------------------------
// Implementing an interface to a class
// -------------------------------------------------------

interface musician {
    name: string;
    instrument: string;
    play(action: string): string;
}

class Guitarist implements musician {
    name: string;
    instrument: string;
    
    constructor(name: string, instrument: string) {
        this.name = name;
        this.instrument = instrument;
    }

    play(action: string) {
        return `${this.name} ${action} the ${this.instrument}`;
    }
}

const Page = new Guitarist("Jimmy Page", "guitar")
console.log({
    name: Page.name,
    instrument: Page.instrument,
    action: Page.play("strums")
})

// -------------------------------------------------------

class Peeps {
    static count: number = 0;
    
    static getCount(): number {
        return Peeps.count;
    }

    public id: number;

    constructor(public name: string) {
        this.name = name;
        this.id = ++Peeps.count;
    }
}

const John = new Peeps("John");
const Steve = new Peeps("Steve");
const Amy = new Peeps("Amy");

console.log({
    count: Peeps.count,
    John: { name: John.name, id: John.id },
    Steve: { name: Steve.name, id: Steve.id },
    Amy: { name: Amy.name, id: Amy.id },
})

class Bands {
    private dataState: string[];

    constructor(){
        this.dataState = [];
    }
    
    public get data(): string[] {
        return this.dataState;
    }

    public set data(value: string[]) {
        if (Array.isArray(value) && value.every(element => typeof element === "string")) {
            this.dataState = value;
            return
        } else throw new Error("Param is not an array of strings")
    }
}

const myBands = new Bands();
myBands.data = ["Led Zep", "21 Pilots", "Maroon 5"]
console.log({ data: myBands.data });
myBands.data = [ ...myBands.data, "ZZ Top" ];
console.log({ data2: myBands.data });
// myBands.data = ["Van Halen", 5150]; // Throws an error

