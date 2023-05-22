var _getInventory = function (items) {
    var _a;
    for (var item in items) {
        console.log((_a = {}, _a[item] = items[item], _a));
    }
};
var _inventory = { x: 23, y: 52, z: 8 };
_getInventory(_inventory);
