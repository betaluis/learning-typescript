"use strict";
// Create a class that converts farhenheit to celsius and vice versa
class TemperatureConverter {
    constructor() {
        this.far = 0;
        this.cel = 0;
    }
    get farhenheit() {
        return this.far;
    }
    set farhenheit(value) {
        if (typeof value === "number") {
            this.far = value;
            this.cel = (value - 32) * (5 / 9);
            return;
        }
        else
            throw new Error("Temperature must be a number");
    }
    get celsius() {
        return this.cel;
    }
    set celsius(value) {
        if (typeof value === "number") {
            this.cel = value;
            this.far = (value * 1.8) + 32;
            return;
        }
        else
            throw new Error("Temperature must be a number");
    }
}
const converter = new TemperatureConverter();
converter.farhenheit = 68;
console.log({
    farhenheit: converter.farhenheit,
    celsius: converter.celsius
});
converter.celsius = 32;
console.log({
    farhenheit: converter.farhenheit,
    celsius: converter.celsius
});
