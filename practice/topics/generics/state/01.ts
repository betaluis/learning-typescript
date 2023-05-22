class State<T> {
    private data: T;

    constructor(val: T) {
        this.data = val;
    }

    set state(val: T) {
        this.data = val;
    }

    get state(): T {
        return this.data;
    }
}

const store = new State("Luis");

console.log(store.state);
store.state = "Lauren";
console.log(store.state);
