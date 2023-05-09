enum MenuItemCategory {
    Appetizer = 1,
    Side,
    Entree,
    Dessert
}

interface MenuItem {
    name: string;
    description: string;
    price: number;
    category: MenuItemCategory
}

class Menu {
    private items: MenuItem[] = [];

    addItem(item: MenuItem) {
        this.items.push(item);
    }

    getItemsByCategory(MenuItemCategory) {
        return this.items.filter(item => item.category === MenuItemCategory);
    }

    getMostExpensiveItem() {
        let mostExpensiveItem: string = "";
        let currentMostExpensivePrice: number = 0;

        for (let i = 0; i < this.items.length; i++) {

            if (this.items[i].price > currentMostExpensivePrice) {
                mostExpensiveItem = this.items[i].name;
                currentMostExpensivePrice = this.items[i].price;
            }
        }

        return mostExpensiveItem;
    }
}

const cfl = new Menu();

cfl.addItem({
    name: "Nuggets",
    description: "Bite-sized pieces of tender all breast meat chicken, seasoned to perfection, freshly breaded and pressure cooked in 100% refined peanut oil.",
    price: 4.99,
    category: MenuItemCategory.Entree,
});

cfl.addItem({
    name: "Waffle Fries",
    description: "A large order of our waffle-shaped potatoes, cooked in canola oil until crispy outside and tender inside.",
    price: 2.99,
    category: MenuItemCategory.Side,
});

cfl.addItem({
    name: "Chick-fil-A® Chicken Sandwich Deluxe",
    description: "A boneless breast of chicken seasoned to perfection, hand-breaded, pressure cooked in 100% refined peanut oil and served on a toasted, buttered bun with dill pickle chips, Green Leaf lettuce, tomato and American cheese. Also available on a multigrain bun.",
    price: 5.45,
    category: MenuItemCategory.Entree,
});

cfl.addItem({
    name: "Chick-fil-A® Chicken Sandwich",
    description: "A boneless breast of chicken seasoned to perfection, hand-breaded, pressure cooked in 100% refined peanut oil and served on a toasted, buttered bun with dill pickle chips. Also available on a multigrain bun.",
    price: 3.75,
    category: MenuItemCategory.Entree,
});

cfl.addItem({
    name: "Chocolate Milkshake",
    description: "Hand-spun the old-fashioned way, this delicious treat is blended with Chick-fil-A® Icedream® dessert and available in vanilla, chocolate, strawberry or cookies & cream. Available with whipped cream on top.",
    price: 3.15,
    category: MenuItemCategory.Dessert,
});

// console.log("////////// Side Items //////////");
// console.log(cfl.getItemsByCategory(MenuItemCategory.Side));

// console.log("////////// Entree Items //////////");
// console.log(cfl.getItemsByCategory(MenuItemCategory.Entree));

// console.log("////////// Dessert Items //////////");
// console.log(cfl.getItemsByCategory(MenuItemCategory.Dessert));

console.log("////////// Most Expensive Item //////////");
console.log(cfl.getMostExpensiveItem());
