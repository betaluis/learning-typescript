var containsDuplicate = function (nums) {
    var set = new Set(nums);
    var isEqual = set.size === nums.length;
    return !isEqual;
};
var a = containsDuplicate([1, 2, 3]);
var b = containsDuplicate([1, 2, 3, 1, 2, 3]);
console.log({ a: a, b: b });
// Time Complexity: O(n)
// Space Complexity: O(n)
