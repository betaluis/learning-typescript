type Operations = number | string;

const ops: Operations[] = [5,-2, 4, "C","D",9,"+","+"];

const calPoints = (operations: Operations[]): number => {
    let points: number[] = [];
    for (let i = 0; i < operations.length; i++) {
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
        } else {
            points.push(operations[i] as number);
        }
    }
    return points.reduce((curr, prev) => curr + prev);
}

console.log(calPoints(ops));

// TODO:
// The problem that I have to figure out is that
// I have to solve the problem if a number is entered as a string
// like it is on leetcode. I have to figure out how to convert
// the string to a number.

// Time Complexity: O(n)
// why? because we are iterating through the array once.
// what about the reduce method? I think it is O(n) as well.
// so it would be O(n) + O(n) = O(2n) => O(n)

// Space Complexity: O(n)
// why? because we are creating a new array that is the same size
// as the input array.
