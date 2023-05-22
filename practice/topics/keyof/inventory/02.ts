type Item = "x" | "y" | "z";

type _Inventory = Record<Item, number>

var _getInventory = (items: _Inventory): void => {
    for (const item in items) {
        console.log({ [item]: items[item] });
    }
} 

const _inventory = { x: 23, y: 52, z: 8 };
_getInventory(_inventory);
