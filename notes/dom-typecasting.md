# DOM & Typecasting

Just line in JavaScript, we can interact with the DOM using TypeScript as well.

## Create file
* ./src/app.ts

## Working with the DOM

It's very much the same but with some differences that we need to be aware of.

    const anchor = documnet.querySelector('a');

    console.log(anchor.href);

- This will give us an error that says "anchor is possibly null."
- To fix this there are two ways:

    1. We create an if statement to check whether the element exist.
        
            if (anchor) console.log(anchor.href);
    
    2. If we are certain that the element exist in the page, then we can append an "!" to the end of the selector.

            const anchor = document.querySelector('a')!;

One neat thing about TypeScript is that it recognizes the types of variables which in this case is an HTML anchor elelment. This means that TypeScript will provide all the methods or properties that can be used on this variable when you type `anchor.`. 

Another example:

    const form = document.querySelector('form')!;

* What if there's more than one form?
  
    - You could use a class instead to grab the form, but the problem with this is that you lose the intellisense that TypeScript provides because TypeScript doesn't know which kind of element is being grabbed.

            cosnt form = document.querySelector('new-item-form')!;

    - This is where we use **typecasting**. 

    <br />

## What is typecasting?

Typecasting is where we tell TypeScript the type of element we're looking to grab. We can cast the element we're grabbing to be a certain type.

Using the example from above:

    const form = document.querySelector('new-item-form') as HTMLFormElement;

- Notice that we didn't have to add the "!" at the end.

- Now when we grab this element, it's going to be stored as a Form type.

- We can now do something like this: 

<br />

    console.log(form.children);

Great! Let's continue and using the same method grab the input fields.

    const type = document.querySelector('#type') as HTMLSelectElement;
    const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
    const details = document.querySelector('#details') as HTMLInputElement;
    const amount = document.querySelector('#amount') as HTMLInputElement;

Add an event listener to the form and console.log the the information written in the form.

    form.addEventListener('submit', (e: Event) => {
        e.preventDefault();

        console.log(
            type.value,
            tofrom.value,
            details.value,
            amount.value
        )
    })

This consoles all the information that we need, but if you notice the "amount" is not of type number, but of type string. We can change this by doing the following:

    console.log(
        type.value,
        tofrom.value,
        details.value,
        amount.valueAsNumber
    )

