var getInventoryCount = function (items, itemToGet) {
    return items[itemToGet];
};
var myInventory = {
    x: 23,
    y: 82,
    z: 52
};
console.log(getInventoryCount(myInventory, "x"));
