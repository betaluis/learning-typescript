"use strict";
class Band {
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) && value.every(el => typeof el === "string")) {
            this.dataState = value;
            return; // Setters cannot return values, so we do it this way.
        }
        else
            throw new Error("Param is not an array of strings");
    }
}
const bands = new Band();
bands.data = ["Led Zeppelin", "Aerosmith", "Guns N' Roses", "The Beach Boys", "Bob Marley & The Wailers", "The Doors", "Red Hot Chili Peppers", "KISS", "Coldplay", "David Bowie"];
console.log(bands.data);
bands.data = [...bands.data, "The Beatles"];
console.log(bands.data);
