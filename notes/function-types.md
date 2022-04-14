
We know that we can asign a type of function to a varaible so that when the variable is called it's for sure a function.

    let greet: Function;

We can take it one step further and specify a function signature.

## What is a function signature?

- A function signature describes the general structure of a function. For example, what arguments it takes in and what type of data will it return?

The following function signature tells us that this function takes no parameters and it returns void as well.

    () => void

## More examples

Example 1:

    let greet: (a: string, b: string) => void;

    greet = (name: string, greeting: string) => {
        console.log(`${name} says ${greeting}`);
    }

- The parameters passed in don't have to be called the same as the function signature.

- The types have to match exactly to the function signature or you will get an error.

- The "void" is inferred because we aren't returning anything, so everything is okay.

Example 2:

    let calc: (a: number, b: number, c: string) => number; 

    calc = (numOne: number, numTwo: number, action: string) => {
        if (action === 'add') {
            return numOne + numTwo;
        }
    }

- This function will return an error. Can you see why? 
- If the action equals "add" it will return `numberOne` + `numberTwo`, but what if it doesn't? It returns void, and that's not how the function signature was created. The function signature says that a number must be returned.

Example 3: 

    let logDetails: (obj: {name: string, age: number }) => void;

    type person = {name: string, age: number};

    logDetails = (person: person) => {
        console.log(`${person.name} is ${person.age} years old.`)
    }