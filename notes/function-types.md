
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

