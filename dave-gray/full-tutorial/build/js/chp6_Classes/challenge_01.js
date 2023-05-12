"use strict";
/*
Challenge:

Create a class called "Car" that implements an interface called "Vehicle". The
Vehicle interface should have the following properties:

- make: string
- model: string
- year: number
- color: string

The Car class should have a constructor that takes in the make, model, year,
and color of the car as parameters. It should also have a method called
"getInfo" that returns a string containing the make, model, year, and color of
the car.

Once you have completed the challenge, test your code by creating an instance
of the Car class and calling the getInfo method.
*/
class Car {
    constructor(make, model, year, color) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
    }
    getInfo() {
        return {
            make: this.make,
            model: this.model,
            year: this.year,
            color: this.color
        };
    }
}
const myCar = new Car("Nissan", "Versa", 2012, "Silver");
console.log(myCar.getInfo());
