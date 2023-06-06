// You have a set of grades that you need to give out to all students
// List the possible options of students

type Students = "Sara" | "Kelly" | "Mike" | "Paul" | null | undefined;

type namesOnly = NonNullable<Students>; // Creates a type that has only names.


// Challenge:
// Create a function that filters null and undefined

const filterNonNullable = (values: (string | null | undefined)[]): NonNullable<typeof values> => {
    return values.filter(item => item !== null && item !== undefined) as NonNullable<typeof values>
}

const input = ["Hello", "Foo", null, "Bar", undefined]
console.log(filterNonNullable(input))
