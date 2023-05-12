"use strict";
class School {
    static getCount() {
        return School.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++School.count;
    }
}
School.count = 0;
const francone = new School("Francone");
const campbell = new School("Campbell");
const ridge = new School("Cy-Ridge");
console.log(School.getCount());
console.log(campbell.id);
