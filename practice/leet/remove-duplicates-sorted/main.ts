const removeDuplicates = (nums) => {
    let [left, right] = [0, 0];
    while (right < nums.length) {
        const [leftValue, rightValue] = [nums[left], nums[right]];

        const isEquals = leftValue === rightValue;

        if (!isEquals) {
            left++;
            nums[left] = rightValue;
        } 

        right++; 
    }

    return left + 1;
}

removeDuplicates([1, 1, 2]);

