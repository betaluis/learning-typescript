// Create a class that converts farhenheit to celsius and vice versa

class TemperatureConverter {

    private far: number;
    private cel: number;

    constructor() {
        this.far = 0;
        this.cel = 0;
    }

    public get farhenheit(): number {
        return this.far;
    }
    
    public set farhenheit(value: number) {
        if (typeof value === "number") {
            this.far = value;
            this.cel = (value - 32) * (5/9);
            return;
        } else throw new Error("Temperature must be a number");
    }

    public get celsius(): number {
        return this.cel;
    }

    public set celsius(value: number) {
        if (typeof value === "number") {
            this.cel = value;
            this.far = (value * 1.8) + 32;
            return;
        } else throw new Error("Temperature must be a number");
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
