"use strict";
const inventory = {
    x: 3,
    y: 67,
    z: 32
};
const getInventory = (items) => {
    for (const item in items) {
        console.log(`${items[item]} pieces of ${item}`);
    }
};
getInventory(inventory);
