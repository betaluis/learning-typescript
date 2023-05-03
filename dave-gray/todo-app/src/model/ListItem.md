This code defines an interface `Item` which has three properties: `id`, `item`,
and `checked`. It then defines a class `ListItem` that implements the `Item`
interface.

The `ListItem` class has a constructor that takes three parameters, `_id`,
`_item`, and `_checked`. These parameters are optional and have default values
of an empty string for `_id` and `_item`, and `false` for `_checked`.

The class also has three getter methods (`id`, `item`, and `checked`) and three
setter methods (`id`, `item`, and `checked`). These methods allow access to and
modification of the private variables `_id`, `_item`, and `_checked`.

By implementing the `Item` interface, the `ListItem` class ensures that it has
the same properties and types as the `Item` interface, making it easier to use
and interchange with other classes and interfaces that also implement the
`Item` interface.

# Challenge Yourself **Challenge: Create a class that implements an interface**

In this challenge, you need to create a class called `ListItem` that implements
the `Item` interface. The `Item` interface should have three properties:
- `id` (a string)
- `item` (a string)
- `checked` (a boolean)

The `ListItem` class should have three private properties:
- `_id` (a string)
- `_item` (a string)
- `_checked` (a boolean)

The `ListItem` class should implement the `Item` interface using the private
properties as the values for the interface properties. The class should have
getter and setter methods for each private property.

Here's an example of how the `ListItem` class should be used:

```typescript
const item = new ListItem('1', 'Buy milk', false);

console.log(item.id); // '1'
console.log(item.item); // 'Buy milk'
console.log(item.checked); // false

item.checked = true;
console.log(item.checked); // true
```

**Constraints:**
- The `id` property must be a string.
- The `item` property must be a string.
- The `checked` property must be a boolean.

``` typescript
export interface Item {
    id: string;
    item: string;
    checked: boolean;
}

export default class ListItem implements Item {
    constructor(
        private _id: string = '',
        private _item: string = '',
        private _checked: boolean = false
    ) {}

    get id(): string {
        return this._id;
    }

    set id(id: string) {
        this._id = id;
    }

    get item(): string {
        return this._item;
    }

    set item(item: string) {
        this._item = item;
    }

    get checked(): boolean {
        return this._checked;
    }

    set checked(checked: boolean) {
        this._checked = checked;
    }

}
```
