var outerFunction = function () {
    var variable = "This is in the outer function";
    var innerFunction = function () {
        console.log(variable);
    };
    return innerFunction;
};
var closure = outerFunction();
closure();
