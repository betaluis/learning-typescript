var containsDuplicate = function (nums) {
    nums.sort(function (a, b) { return a - b; });
    for (var i = 0; i < nums.length; i++) {
        var isDuplicate = nums[i] === nums[i + 1];
        if (isDuplicate)
            return true;
    }
    return false;
};
var a = containsDuplicate([1, 2, 3, 1, 2, 3]);
var b = containsDuplicate([1, 2, 3]);
console.log({ a: a, b: b });
/*
** Time Complexity: O(nlogn)
*/
