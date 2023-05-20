var arr = [1, 2, 3, 3, 200, 4, 4, 5, 100, 2, 4, 5, 1];
arr.sort(function (a, b) { return a - b; });
console.log(Array.from(new Set(arr)));
