// You have a set of grades that you need to give out to all students
// List the possible options of students
// Challenge:
// Create a function that filters null and undefined
var filterNonNullable = function (values) {
    return values.filter(function (item) { return item !== null && item !== undefined; });
};
var input = ["Hello", "Foo", null, "Bar", undefined];
console.log(filterNonNullable(input));
