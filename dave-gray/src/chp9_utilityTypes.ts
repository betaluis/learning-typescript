// Utility Types

// Partial
// ----------------------------------------------------------------
interface Assignment {
    studentID: string;
    title: string;
    grade: number;
    verified?: boolean;
}

const updateAssignment = (assign: Assignment, propsToUpdate: Partial<Assignment>): Assignment => {
    return { ...assign, ...propsToUpdate };
};

const assign1: Assignment = {
    studentID: "compsci123",
    grade: 0,
    title: "Final Project"
}

const assignGraded: Assignment = updateAssignment(assign1, { grade: 95 });
console.log({
    1: updateAssignment(assign1, { grade: 95 }),
    2: assignGraded,
});

// Required and Readonly
// ----------------------------------------------------------------
const recordAssignment = (assign: Required<Assignment>): Assignment => {
    // Send to database
    return assign;
}

const assignVerified: Readonly<Assignment> = { 
    ...assignGraded,
    verified: true,
}

recordAssignment({ ...assignGraded, verified: true }); 

// Record 
// ----------------------------------------------------------------
const hexValueMap: Record<string, string> = {
    red: "FF0000",
    green: "00FF00",
    blue: "0000FF"
}

// 3:33:47

type Students = "Sara" | "Kelly";
type LetterGrades = "A" | "B" | "C" | "D" | "U";

const finalGrades: Record<Students, LetterGrades> = {
    Sara: "A",
    Kelly: "C",
}

interface Grades {
    assign1: number;
    assign2: number;
}

const gradeData: Record<Students, Grades> = {
    Kelly: { assign1: 87, assign2: 89 },
    Sara: { assign1: 98, assign2: 95 },
}

// Pick and Omit
// ----------------------------------------------------------------
type AssignResult = Pick<Assignment, "studentID" | "grade">
const score: AssignResult = {
    grade: 87,
    studentID: "T231",
}

type PreviewGrade = Omit<Assignment, "grade" | "verified">
const preview: PreviewGrade = {
    title: "Final Project",
    studentID: "T231",
}

// Exclude and Extract
// ----------------------------------------------------------------
type AdjustedGrade = Exclude<LetterGrades, "U">
type highGrades = Extract<LetterGrades, "A" | "B">

// Non nullable
type AllPossibleGrades = "Dave" | "John" | "Mark" | null | undefined;
type NamesOnly = NonNullable<AllPossibleGrades>;

// Return Type
// ----------------------------------------------------------------

// type newAssign = { title: string, points: number };
// ^^ If we change the function below the type will not change.

const createNewAssign = (title: string, points: number ) => {
    return { title, points };
}

// Now that we used a ReturnType, if we change the function, the type will change as well.
type NewAssign = ReturnType<typeof createNewAssign>;

const tsAssign: NewAssign = createNewAssign("Utility types", 38);
console.log({ tsAssign: tsAssign });

// Parameters
// Deriving a type from a fuction
// ----------------------------------------------------------------
type AssignParams = Parameters<typeof createNewAssign>;
const assignArgs: AssignParams = ["Generics", 100];
const tsAssign2: NewAssign = createNewAssign(...assignArgs);
console.log(tsAssign2);


// Awaited
// helps us with the ReturnType of a promise
// ----------------------------------------------------------------

interface User {
    id: number;
    name: string;
    username: string;
    email: string;
}

const fetchUsers = async (): Promise<User[]> => {
    const data = await fetch(
        "https://jsonplaceholder.typicode.com/users"
    ).then(res => {
        return res.json();
    }).catch(err => {
            if (err instanceof Error) console.log(err.message);
    })
    return data;
}

// Without Awaited
// type FetchUsersReturnType = ReturnType<typeof fetchUsers>; // returns a promise, but we want the return type of the results not the promise.
type FetchUsersReturnType = Awaited<ReturnType<typeof fetchUsers>>;

fetchUsers().then(users => console.log(users))
