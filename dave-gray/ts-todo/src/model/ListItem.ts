// Interface
// Create class
// Constructor
// ged and set


interface Item {
    id: number;
    name: string;
    done: boolean;
}

export default class ListItem implements Item {

    constructor(
        private _id: number = 0,
        private _name: string = "",
        private _done: boolean = false

    ) {}

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get name(): string {
        return this._name;
    }

    set name(newName: string) {
        this._name = newName;
    }

    get done(): boolean {
        return this._done;
    }

    set done(isDone: boolean) {
        this._done = isDone;
    }
}

const test = new ListItem(1, "milk", true);
console.log(test)


