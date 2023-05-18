var containsDuplicate = (nums: number[]) => { 
    nums.sort((a, b) => a - b)

    for (let i = 0; i < nums.length; i++) {
        const isDuplicate = nums[i] === nums[i + 1];
        if (isDuplicate) return true;
    }

    return false;
}

const a = containsDuplicate([1, 2, 3, 1, 2, 3]);
const b = containsDuplicate([1, 2, 3]);

console.log({ a, b });

/*
** Time Complexity: O(nlogn)
*/
