"use strict";
// Index Signatures 
// -------------------------------------------
const todaysTransactions = {
    Pizza: -10,
    Books: -5,
    Job: 50,
};
let prop = "Pizza";
// console.log(todaysTransactions[prop]); // error
console.log({
    dot: todaysTransactions.Pizza,
    bracket: todaysTransactions["Pizza"],
    prop: todaysTransactions[prop]
});
const todaysNet = (transactions) => {
    let total = 0;
    for (const transaction in transactions) {
        total += transactions[transaction]; // you get an error if you don't use index signatures
    }
    return total;
};
console.log({ todaysNet: todaysNet(todaysTransactions) });
const student = {
    name: "Doug",
    GPA: 3.5,
    classes: [100, 200]
};
// console.log(student.test); // Potential error because ts has no problem with this even though the property doesn't exist
// If you comment out the index signature then the itteration won't work.
// -----------------------------------------------------------------------
// for (const key in student) {
//     console.log(`${key}: ${student[key]}`)
// }
// Here is a solution to iterate when there's no signature using "Keyof"
// -----------------------------------------------------------------------
for (const key in student) {
    console.log(`${key}: ${student[key]}`);
}
// An alternative of the above
// --------------------------------------
console.log("-------------- Alternative ---------------");
console.log("array of properties in the object: ", Object.keys(student));
Object.keys(student).map(k => console.log(student[k])); // typeof student is the type of the object which also works incase you didn't have the interface/type.
// another keyof example using a function 
// ----------------------------------------------
// keyof is a type operator that returns the keys of a type as a union of string literals
// keyof Student returns "name" | "GPA" | "age"
const logStudentKey = (student, key) => {
    console.log("------------- keyof with function -------------");
    console.log(`Student ${key}: ${student[key]}`);
};
logStudentKey(student, "GPA"); // consoles Student GPA: 3.5
// ---------------------------------------------
// We're goirg to achive the same thing with a type
// interface Incomes {
//     [index: string]: number;
// }
console.log("----------------- <Record> -----------------");
const monthlyIncomes = {
    bonus: 400,
    salary: 1500,
    sidehustle: 200
};
for (const revenue in monthlyIncomes) {
    console.log(monthlyIncomes[revenue]);
    // ----------------------------------------------------------------
    // ERROR: ts has a problem with this if there is no assertion
    //
    // console.log(monthlyIncomes[revenue]);
    //
    // The only keys that can be used are the ones in template literals
    // ----------------------------------------------------------------
}
