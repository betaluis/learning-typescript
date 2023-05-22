// Tip: Use Record<>

type Product = "x" | "y" | "z"; 

type Inventory = Record<Product, number>

var getInventory = (inventory: Inventory, product: Product) => {
    return {
        [product]: inventory[product as keyof Inventory]
    }
}

const inventory = {
    x: 1,
    y: 3,
    z: 5
}

const x = getInventory(inventory, "z");
console.log(x)

