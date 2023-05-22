class StateObject<T> {
    private data: T;

    constructor(value: T) {
        this.data = value;
    }

    set state(val: T) {
        this.data = val;
    }

    get state(): T {
        return this.data;
    }
}

const store = new StateObject(3);

console.log(store.state);
store.state = 4;
console.log(store.state);
