/*
** Time complexity: O(n^2)
** Space complexity: O(1)
*/
var containsDuplicate = function (nums) {
    for (var i = 0; i < nums.length; i++) {
        for (var u = 0; u < i; u++) {
            var isDuplicate = nums[i] === nums[u];
            if (isDuplicate)
                return true;
        }
    }
    return false;
};
var a = containsDuplicate([1, 2, 3]);
var b = containsDuplicate([1, 2, 3, 2]);
console.log({ a: a, b: b });
