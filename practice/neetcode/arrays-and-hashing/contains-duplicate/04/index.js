var containsDuplicate = function (nums, numSet) {
    if (numSet === void 0) { numSet = new Set(); }
    for (var _i = 0, nums_1 = nums; _i < nums_1.length; _i++) {
        var num = nums_1[_i];
        if (numSet.has(num))
            return true;
        numSet.add(num);
    }
    return false;
};
var a = containsDuplicate([1, 2, 3]);
var b = containsDuplicate([1, 2, 3, 1, 2, 3]);
console.log({ a: a, b: b });
// Time Complexity: O(n)
// Space Complexity: O(n)
