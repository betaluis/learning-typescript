"use strict";
let userInput; // We don't know what the user will enter.
let userName;
userInput = 5;
userInput = 'Max';
if (typeof userInput === 'string') {
    userName = userInput;
}
// Never
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError('An error occured!', 500);
