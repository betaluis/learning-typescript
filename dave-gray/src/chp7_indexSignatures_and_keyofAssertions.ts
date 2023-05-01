// Index Signatures 
// -------------------------------------------

// Commenting out because we wouldn't know these were the values we needed
// interface TransactionObj {
//     Pizza: number;
//     Books: number;
//     Job: number;
// }

// interface TransactionObj {
//     readonly [index: string]: number;
// }

interface TransactionObj {
    readonly [index: string]: number;
    Pizza: number;
    Books: number;
    Job: number;
}

const todaysTransactions: TransactionObj = {
    Pizza: -10,
    Books: -5,
    Job: 50,
}

let prop: string = "Pizza";
// console.log(todaysTransactions[prop]); // error

console.log({ 
    dot: todaysTransactions.Pizza,
    bracket: todaysTransactions["Pizza"],
    prop: todaysTransactions[prop]
});

const todaysNet = (transactions: TransactionObj) => {
    let total = 0;
    for (const transaction in transactions) {
        total += transactions[transaction]; // you get an error if you don't use index signatures
    }
    return total;
}

console.log({ todaysNet: todaysNet(todaysTransactions) });
// todaysTransactions.Pizza = 40; // if signature index is set to readonly you can't re-assign.

// console.log(todaysTransactions["Luis"]) // This returns undefined and TS is okay with it.

interface Student {
//  readonly [index: string]: string | number | number[] | undefined;
    name: string;
    GPA: number;
    classes?: number[]
}

const student: Student = {
    name: "Doug",
    GPA: 3.5,
    classes: [100, 200]
}

// console.log(student.test); // Potential error because ts has no problem with this even though the property doesn't exist

// If you comment out the index signature then the itteration won't work.
// -----------------------------------------------------------------------
// for (const key in student) {
//     console.log(`${key}: ${student[key]}`)
// }

// Here is a solution to iterate when there's no signature using "Keyof"
// -----------------------------------------------------------------------
for (const key in student) {
    console.log(`${key}: ${student[key as keyof Student]}`)
}

// An alternative of the above
// --------------------------------------

console.log("-------------- Alternative ---------------");
console.log("array of properties in the object: ", Object.keys(student));
Object.keys(student).map(k => console.log(student[k as keyof typeof student]));

// another keyof example using a function 
// ----------------------------------------------

const logStudentKey = (student: Student, key: keyof Student): void => {
    console.log("------------- keyof with function -------------");
    console.log(`Student ${key}: ${student[key]}`);
}
logStudentKey(student, "GPA")

// ---------------------------------------------
// We're goirg to achive the same thing with a type
// interface Incomes {
//     [index: string]: number;
// }

console.log("----------------- <Record> -----------------");
type Streams = "salary" | "bonus" | "sidehustle";
type Incomes = Record<Streams, number>;
const monthlyIncomes: Incomes = {
    bonus: 400,
    salary: 1500,
    sidehustle: 200
}
for (const revenue in monthlyIncomes) {
    // console.log(monthlyIncomes[revenue]); // ts has a problem with this if there is no assertion
    console.log(monthlyIncomes[revenue as keyof Incomes]);
}
