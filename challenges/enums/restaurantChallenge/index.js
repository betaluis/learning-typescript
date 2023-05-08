var MenuItemCategory;
(function (MenuItemCategory) {
    MenuItemCategory[MenuItemCategory["Appetizer"] = 1] = "Appetizer";
    MenuItemCategory[MenuItemCategory["Side"] = 2] = "Side";
    MenuItemCategory[MenuItemCategory["Entree"] = 3] = "Entree";
    MenuItemCategory[MenuItemCategory["Dessert"] = 4] = "Dessert";
})(MenuItemCategory || (MenuItemCategory = {}));
var Menu = /** @class */ (function () {
    function Menu() {
        this.items = [];
    }
    Menu.prototype.addItem = function (item) {
        this.items.push(item);
    };
    Menu.prototype.getItemsByCategory = function (MenuItemCategory) {
        return this.items.filter(function (item) { return item.category === MenuItemCategory; });
    };
    return Menu;
}());
var cfl = new Menu();
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
console.log("////////// Side Items //////////");
console.log(cfl.getItemsByCategory(MenuItemCategory.Side));
console.log("////////// Entree Items //////////");
console.log(cfl.getItemsByCategory(MenuItemCategory.Entree));
console.log("////////// Dessert Items //////////");
console.log(cfl.getItemsByCategory(MenuItemCategory.Dessert));
