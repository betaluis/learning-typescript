// Solution using hashmaps
// -----------------------------------

let arr: number[] = [1,2,3,3,200,4,4,5,100,2,4,5,1];
arr.sort((a,b) => a-b);

console.log(Array.from(new Set(arr)));
