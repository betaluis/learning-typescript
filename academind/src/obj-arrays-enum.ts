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
enum Role { ADMIN, READ_ONLY, AUTHOR };
////////////////////////////////////////

const person = {
  name: 'Luis',
  age: 27,
  hobbies: ['Soccer', 'Coding'],
  role: Role.AUTHOR
}

let favoriteActivities: string[];
favoriteActivities = ['Sports', 'Cooking'];

console.log(person.age);

for (const hobby of person.hobbies) {
  console.log(hobby);
}

if (person.role === Role.ADMIN) {
  console.log('Is admin');
} else {
  console.log('Only admin allowed')
}

