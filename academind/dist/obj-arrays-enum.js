"use strict";
// Be specific { name: string; age: number }
// But typescript will infer this for you which is best practice.
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string]; // Tuple // You know exactly what you need in the array and it has to be exactly that.
// } = {
//   name: 'Luis',
//   age: 30,
//   hobbies: ['Sports', 'Cooking'],
//   role: [2, 'author'],
// };
// ENUM
////////////////////////////////////////
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
;
////////////////////////////////////////
const person = {
    name: 'Luis',
    age: 27,
    hobbies: ['Soccer', 'Coding'],
    role: Role.AUTHOR
};
let favoriteActivities;
favoriteActivities = ['Sports', 'Cooking'];
console.log(person.age);
for (const hobby of person.hobbies) {
    console.log(hobby);
}
if (person.role === Role.ADMIN) {
    console.log('Is admin');
}
else {
    console.log('Only admin allowed');
}
