function addNumbers(a: number, b: number) {
  return a + b;
}

export default addNumbers;

export const addStrings = (str1: string, str2: string = ''): string => `${str1} ${str2}`

// Union
export const format = (title: string, param: string | number): string => {
  return `${title} ${param}`
}

// Function that doesn't return anything
export const printFormat = (title: string, param: string | number): void => {
  console.log(format(title, param));
}

// Promise function
export const fetchData = (url: string): Promise<string> => Promise.resolve(`Data from ${url}.`)

function introduce(salutation: string, ...names: string[]) {
  return `${salutation} ${names.join(' ')}`
}

export function getName(user: { first: string, last: string }): string {
  return `${user?.first ?? 'First'} ${user?.last ?? 'Last'}`
}
