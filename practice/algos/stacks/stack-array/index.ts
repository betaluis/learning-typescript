class StackArray<T> {
    private stack: T[];

    constructor() {
        this.stack = [];
    }

    pop(): T | undefined {
        return this.stack.pop();
    }

    push(val: T): void {
        this.stack.push(val)
    }

    peek(): T | undefined {
        return this.stack[this.stack.length - 1]
    }

    isEmpty(): boolean {
        return this.stack.length === 0;
    }

    size(): number {
        return this.stack.length;
    }

    getStack(): T[] {
        return this.stack;
    }
}

const myStack = new StackArray<string>();

myStack.push("luis");
myStack.push("jose");
myStack.push("ana");

console.log(myStack.getStack());
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.isEmpty());
console.log(myStack.size());
