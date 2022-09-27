
# Type Aliases

## What is it?

* Type aliases help us define types in a much simpler fashion when our code starts to get complex. In the code example below, the parameters begin to become long winded and a lot to type. What if we wanted two more functions with similar parameters? Then it becomes more of a hassle to type all the types out manually. This is why we create "Type Aliases".

## Example code

    const logDetails = (uid: string | number, item: string) => {
        console.log(`${item} has a uid of ${uid}`)
      }

    const greet = (user: {name: string, uid: string | number}) => {
        console.log(`${user.name} says hello`);
      }

## How to create one

    type StringOrNum = string | number;

Now we can use the above in our code example like so.

    const logDetails = (uid: StringOrNum, item: string) => {
        console.log(`${item} has a uid of ${uid}`)
      }

    const greet = (user: {name: string, uid: StringOrNum}) => {
        console.log(`${user.name} says hello`);
      }

This makes typing out the types easier.

Additionally, we can take it one step further and make it even more simpler than the above.

    type objWithName = { name: string, uid: StringOrNum };

    const greet = (user: objWithName) => {
        console.log(`${user.name} says hello`);
      }
      
In conclusion, we create type aliases to simplify our workflow and save us from having to set types manually each time we create a variable, object, or function.