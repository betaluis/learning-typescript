var ops = [5, -2, 4, "C", "D", 9, "+", "+"];
var calPoints = function (operations) {
    var points = [];
    for (var i = 0; i < operations.length; i++) {
        if (typeof operations[i] === "string") {
            switch (operations[i]) {
                case "C":
                    points.pop();
                    break;
                case "D":
                    points.push(points[points.length - 1] * 2);
                    break;
                case "+":
                    points.push(points[points.length - 1] + points[points.length - 2]);
                    break;
                default:
                    break;
            }
        }
        else {
            points.push(operations[i]);
        }
    }
    return points.reduce(function (curr, prev) { return curr + prev; });
};
console.log(calPoints(ops));
// TODO:
// The problem that I have to figure out is that
// I have to solve the problem if a number is entered as a string
// like it is on leetcode. I have to figure out how to convert
// the string to a number.
// Time Complexity: O(n)
// why? because we are iterating through the array once.
