"use strict";
// Utility Types
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const updateAssignment = (assign, propsToUpdate) => {
    return Object.assign(Object.assign({}, assign), propsToUpdate);
};
const assign1 = {
    studentID: "compsci123",
    grade: 0,
    title: "Final Project"
};
const assignGraded = updateAssignment(assign1, { grade: 95 });
console.log({
    1: updateAssignment(assign1, { grade: 95 }),
    2: assignGraded,
});
// Required and Readonly
// ----------------------------------------------------------------
const recordAssignment = (assign) => {
    // Send to database
    return assign;
};
const assignVerified = Object.assign(Object.assign({}, assignGraded), { verified: true });
recordAssignment(Object.assign(Object.assign({}, assignGraded), { verified: true }));
// Record 
// ----------------------------------------------------------------
const hexValueMap = {
    red: "FF0000",
    green: "00FF00",
    blue: "0000FF"
};
const finalGrades = {
    Sara: "A",
    Kelly: "C",
};
const gradeData = {
    Kelly: { assign1: 87, assign2: 89 },
    Sara: { assign1: 98, assign2: 95 },
};
const score = {
    grade: 87,
    studentID: "T231",
};
const preview = {
    title: "Final Project",
    studentID: "T231",
};
// Return Type
// ----------------------------------------------------------------
// type newAssign = { title: string, points: number };
// ^^ If we change the function below the type will not change.
const createNewAssign = (title, points) => {
    return { title, points };
};
const tsAssign = createNewAssign("Utility types", 38);
console.log({ tsAssign: tsAssign });
const assignArgs = ["Generics", 100];
const tsAssign2 = createNewAssign(...assignArgs);
console.log(tsAssign2);
const fetchUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield fetch("https://jsonplaceholder.typicode.com/users").then(res => {
        return res.json();
    }).catch(err => {
        if (err instanceof Error)
            console.log(err.message);
    });
    return data;
});
fetchUsers().then(users => console.log(users));
