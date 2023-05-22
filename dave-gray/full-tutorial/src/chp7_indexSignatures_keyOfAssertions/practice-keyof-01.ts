type Items = "x" | "y" | "z";

type Inventory = Record<Items, number>;

const inventory = {
    x: 3,
    y: 67,
    z: 32
}

const getInventory = (items: Inventory): void => {
    for (const item in items) {
        console.log(`${items[item as keyof Inventory]} pieces of ${item}`);
    }
}

getInventory(inventory);

