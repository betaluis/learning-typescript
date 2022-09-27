// Union Types : number | string
// Literal Types : resultConverstion: 'as-number' | 'as-string'
// Aliases

type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-string';

function combine(
  input1: Combinable,
  input2: Combinable,
  resultConversion: ConversionDescriptor,
) {
  let result: Combinable;
  
  if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }

  return result;
}

const combinedAges = combine(30, 30, 'as-number');

const combinedNames = combine('Luis', 'Betancourt', 'as-string');

const combinedStringNumbers = combine('30', '22', 'as-number');

