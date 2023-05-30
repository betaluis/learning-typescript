var removeDuplicates = function (nums) {
    var _a = [0, 0], left = _a[0], right = _a[1];
    while (right < nums.length) {
        var _b = [nums[left], nums[right]], leftValue = _b[0], rightValue = _b[1];
        var isEquals = leftValue === rightValue;
        if (!isEquals) {
            left++;
            nums[left] = rightValue;
        }
        right++;
    }
    return left + 1;
};
removeDuplicates([1, 1, 2]);
