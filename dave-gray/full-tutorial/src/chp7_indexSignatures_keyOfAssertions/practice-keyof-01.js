var inventory = {
    x: 3,
    y: 67,
    z: 32
};
var getInventory = function (items) {
    for (var item in items) {
        console.log("".concat(items[item], " pieces of ").concat(item));
    }
};
getInventory(inventory);
