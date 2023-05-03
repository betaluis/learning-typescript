```
import ListItem from './ListItem';

interface List {
    list: ListItem[];
    load(): void;
    save(): void;
    clearList(): void;
    addItem(itemObj: ListItem): void;
    removeItem(id: string): void;
}

export default class FullList implements List {

    static instance: FullList = new FullList();

    private constructor(private _list: ListItem[] = []){}

    get list(): ListItem[] {
        return this._list;
    }

    load(): void {
        const storedList: string | null = localStorage.getItem("myList");
        if (typeof storedList !== "string") return;

        const parsedList: { _id: string; _item: string; checked: boolean; }[] = JSON.parse(storedList);

        parsedList.forEach(item => {
            const newListItem = new ListItem(item._id, item._item, item.checked);
            FullList.instance.addItem(newListItem);
        });

    }
    
    save(): void {
        localStorage.setItem("myList", JSON.stringify(this._list));
    }

    clearList(): void {
        this._list = [];
        this.save();
    }

    addItem(itemObj: ListItem): void {
        this._list.push(itemObj);
        this.save();
    }

    removeItem(id: string): void {
        this._list = this._list.filter(item => item.id !== id);
        this.save();
    }
}
```

This code defines an interface called `List` that has several properties and
methods related to managing a list of `ListItem` objects. The `List` interface
includes a property called `list` that is an array of `ListItem` objects, and
methods like `load`, `save`, `clearList`, `addItem`, and `removeItem`.

Next, the `FullList` class is defined and it implements the `List` interface.
The class has a private constructor that takes an optional parameter `_list`
which is initialized to an empty array of `ListItem` objects. The `list`
property is defined as a getter that returns the `_list` private property. 

The `load` method retrieves a stored list from the local storage, parses it,
and creates new `ListItem` objects from the parsed data, then adds them to the
`_list` array by calling the `addItem` method on `FullList.instance`. 

The `save` method saves the `_list` array to local storage.

The `clearList` method sets the `_list` array to an empty array and then calls
the `save` method to update local storage.

The `addItem` method pushes a new `ListItem` object onto the `_list` array and
then calls the `save` method to update local storage.

The `removeItem` method removes an item with a specific `id` from the `_list`
array using the `filter` method and then calls the `save` method to update
local storage.

Finally, the `FullList` class is exported as the default export of the module.

# Challenge Yourself

Challenge:

You are tasked with writing a TypeScript class `FullList` that implements an
interface called `List`. The `FullList` class should have the following
functionality:

1. A private property called `_list` that is an array of `ListItem` objects.
2. A `get` accessor called `list` that returns the `_list` property.
3. A method called `load` that loads a list of items from local storage and
   adds them to the `_list` property.
4. A method called `save` that saves the current `_list` to local storage.
5. A method called `clearList` that clears the `_list` property and saves the
   updated list to local storage.
6. A method called `addItem` that adds a new `ListItem` object to the `_list`
   property and saves the updated list to local storage.
7. A method called `removeItem` that removes a `ListItem` object from the
   `_list` property by its `id` property and saves the updated list to local
   storage.

Instructions:

1. Define an interface called `List` with the following properties:
   - `list` (an array of `ListItem` objects)
   - `load()` (a method that loads a list of items)
   - `save()` (a method that saves the current list to local storage)
   - `clearList()` (a method that clears the list and saves the updated list to
     local storage)
   - `addItem()` (a method that adds a new item to the list and saves the
     updated list to local storage)
   - `removeItem()` (a method that removes an item from the list by its ID and
     saves the updated list to local storage)

2. Define a class called `FullList` that implements the `List` interface.
   - Create a static property called `instance` that is an instance of the
     `FullList` class.
   - Create a private constructor that takes an optional parameter `_list` that
     is an array of `ListItem` objects.
   - Define a `get` accessor called `list` that returns the `_list` property.
   - Define a method called `load` that loads a list of items from local
     storage and adds them to the `_list` property.
   - Define a method called `save` that saves the current `_list` to local
     storage.
   - Define a method called `clearList` that clears the `_list` property and
     saves the updated list to local storage.
   - Define a method called `addItem` that adds a new `ListItem` object to the
     `_list` property and saves the updated list to local storage.
   - Define a method called `removeItem` that removes a `ListItem` object from
     the `_list` property by its `id` property and saves the updated list to
     local storage.

3. Create a `ListItem` interface that has the following properties:
   - `id` (a string)
   - `item` (a string)
   - `checked` (a boolean)

4. In the `load` method, load the list of items from local storage and add them
to the `_list` property.

5. In the `save` method, save the current `_list` to local storage.

6. In the `clearList` method, clear the `_list` property and save the updated
list to local storage.

7. In the `addItem` method, add a new `ListItem` object to the `_list` property
and save the updated list to local storage.

8. In the `removeItem` method, remove a `ListItem` object from the `_list`
property by its `id` property and save the updated list to local storage.
