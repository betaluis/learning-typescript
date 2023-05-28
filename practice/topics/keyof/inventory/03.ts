type Items = "x" | "y" | "z";

type Inventory = Record<Items, number>;

const getInventoryCount = (items: Inventory, itemToGet: Items): number => {
    return items[itemToGet as keyof Inventory];
}

const myInventory = {
  x: 23,
  y: 82,
  z: 52
}

console.log(getInventoryCount(myInventory, "x"))

