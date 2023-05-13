// Closure:
// A closure is a function that has access to its outer function scope even
// after the outer function has returned

const helloWorld = (): Function => {
    return function(): string {
        return "Hello World"
    }
}

const f = helloWorld();

console.log(f());

// A better example of closure

const outerFunction = (base: number): Function => {
    return function(n: number): number {
        return base + n;
    }
}

console.log(outerFunction(10)(20)); // 30


type CounterType = () => { increment: () => number }

const createCounter: CounterType = (): { increment: () => number } => {
    let value = 0;

    const increment = () => {
        return ++value;
    }

    return {
        increment,
    }
}

const counter1 = createCounter();
const counter2 = createCounter();

console.log(counter1.increment());
console.log(counter2.increment());
console.log(counter2.increment());
