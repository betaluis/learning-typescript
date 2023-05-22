// Tip: Use Record<>
var getInventory = function (inventory, product) {
    var _a;
    return _a = {},
        _a[product] = inventory[product],
        _a;
};
var inventory = {
    x: 1,
    y: 3,
    z: 5
};
var x = getInventory(inventory, "z");
console.log(x);
