export const printToFile = (text: string, callback: () => void): void => {
  console.log(text);
  callback();
}

type MutationFunction = (v: number) => number;

export function arrayMutate(numbers: number[], mutate: MutationFunction): number[] {
  return numbers.map(mutate);
}

console.log(arrayMutate([1,2,3], (v) => v * 10))

const myNewMutationFunction: MutationFunction = (v) => v * 100

export function createAdder(num: number): MutationFunction {
  return (val: number) => num + val;
}

const addOne = createAdder(1);
console.log(addOne(55));
