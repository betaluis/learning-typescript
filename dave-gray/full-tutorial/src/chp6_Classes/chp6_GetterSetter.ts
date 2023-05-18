class Band {
    private dataState: string[];

    constructor() {
        this.dataState = [];
    }

    public get data(): string[] {
        return this.dataState; 
    }

    public set data(value: string[]) {
        if (Array.isArray(value) && value.every(el => typeof el === "string")) {
            this.dataState = value;
            return; // Setters cannot return values, so we do it this way.
        } else throw new Error("Param is not an array of strings");
    }
}

const bands = new Band();
bands.data = ["Led Zeppelin", "Aerosmith", "Guns N' Roses", "The Beach Boys", "Bob Marley & The Wailers", "The Doors", "Red Hot Chili Peppers", "KISS", "Coldplay", "David Bowie"]
console.log(bands.data);
bands.data = [...bands.data, "The Beatles"];
console.log(bands.data);
bands.data = ["The Beatles"];
console.log(bands.data);
