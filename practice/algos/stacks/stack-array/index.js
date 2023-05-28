var StackArray = /** @class */ (function () {
    function StackArray() {
        this.stack = [];
    }
    StackArray.prototype.pop = function () {
        return this.stack.pop();
    };
    StackArray.prototype.push = function (val) {
        this.stack.push(val);
    };
    StackArray.prototype.peek = function () {
        return this.stack[this.stack.length - 1];
    };
    StackArray.prototype.isEmpty = function () {
        return this.stack.length === 0;
    };
    StackArray.prototype.size = function () {
        return this.stack.length;
    };
    StackArray.prototype.getStack = function () {
        return this.stack;
    };
    return StackArray;
}());
var myStack = new StackArray();
myStack.push("luis");
myStack.push("jose");
myStack.push("ana");
console.log(myStack.getStack());
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.isEmpty());
console.log(myStack.size());
