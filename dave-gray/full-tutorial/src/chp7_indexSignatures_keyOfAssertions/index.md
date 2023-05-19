Index signatures:

Index signatures are helpful when you need to access an
object's properties using a dynamic key. This is
especially useful when dealing with objects that have a
large number of properties, or when the properties are
not known until runtime. Index signatures also provide a
way to validate the types of values stored in an object,
ensuring that the values are of the correct type.

For example, if you have an object with a large number of
properties, you can use an index signature to ensure that
each property is of the correct type:

```ts
interface MyObject {
  [key: string]: number;
}

const myObject: MyObject = {
  a: 1,
  b: 2,
  c: 3
};
```
This ensures that all properties of the object are of type
number. If you try to assign a value of a different type
to a property, the compiler will throw an error.

You can also use index signatures to make the properties
of an object readonly:

```ts
interface MyObject {
  readonly [key: string]: number;
}

const myObject: MyObject = {
  a: 1,
  b: 2,
  c: 3
};

myObject.a = 2; // Error: Cannot assign to 'a' because it is a read-only property.
```
---

## Keyof

Keyof is a type query operator in TypeScript that allows
you to get the keys of an object as a union type. It is
used to get the keys of an object as a union type, which
can then be used to access the values of the object. For
example, if you have an object with the keys 'name' and
'age', you can use keyof to get the union type 'name' |
'age'.


```
interface Person {
  name: string;
  age: number;
  occupation: string;
}

const person: Person = {
  name: "John",
  age: 30,
  occupation: "Developer",
};

for (const key in person) {
  if (Object.prototype.hasOwnProperty.call(person, key)) {
    const propertyKey = key as keyof Person;
    const value = person[propertyKey];
    console.log(`${propertyKey}: ${value}`);
  }
}
```
