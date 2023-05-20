
const createCounter = (n: number): () => number  => {
    return function counter(){
        return n++;
    }
}

const counter = createCounter(10);
// console.log(counter());
// console.log(counter());
// console.log(counter());

// Solution using classes
// ----------------------------------

class Counter {

    constructor(private n: number){
        n = this.n;
    }
    
    increment(): number {
        return this.n++;
    }
}

const counter2 = new Counter(10);

console.log(counter2.increment());
console.log(counter2.increment());
