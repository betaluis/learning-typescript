// Return types

function add(n1: number, n2: number): number {
  return n1 + n2;
}

function printResult(num: number) {
  console.log('Result: ' + num);
}

printResult(add(5, 12));

let combineValues: (a: number, b: number) => number;

combineValues = add;

console.log(combineValues(8,8))

function addAndHandle(a: number, b: number, cb: (x: number) => void) {
  let result = a + b;
  cb(result)
}

addAndHandle(2, 5, (answer) => {
  console.log(answer)
});
