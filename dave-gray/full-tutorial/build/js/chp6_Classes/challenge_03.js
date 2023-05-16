"use strict";
// Review of challenge 2
// I need to create a class "Restaurant" that keeps track of how many restaurant instances have been created.
// Create a method that gets those instances. This is achieved with the static keyword.
class Restaurant {
    static getCount() {
        return Restaurant.count;
    }
    constructor(name, menu) {
        this.name = name;
        this.menu = menu;
        name = this.name;
        menu = this.menu;
        this.id = ++Restaurant.count;
    }
    getMenu() {
        return this.menu;
    }
    addMenu(item) {
        this.menu.push(item);
    }
}
Restaurant.count = 0;
const Chipotle = new Restaurant("Chipotle", [{ name: "Steak Burrito", price: 15 }, { name: "Chicken Burrito", price: 14 }]);
const Pappasitos = new Restaurant("Pappasitos", [{ name: "Cheese Enchiladas", price: 19 }, { name: "Chicken Fajitas", price: 49 }]);
console.log("///////////////////////////");
console.log([
    {
        name: Chipotle.name,
        id: Chipotle.id,
        getCount: Restaurant.getCount(),
        menu: Chipotle.getMenu(),
    },
    {
        name: Pappasitos.name,
        id: Pappasitos.id,
        getCount: Restaurant.getCount(),
        menu: Pappasitos.getMenu(),
    }
]);
console.log("///////////////////////////");
