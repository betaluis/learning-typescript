

let userInput: unknown; // We don't know what the user will enter.
let userName: string;

userInput = 5;
userInput = 'Max';

if (typeof userInput === 'string') {
  userName = userInput;
}

// Never

function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

generateError('An error occured!', 500);

