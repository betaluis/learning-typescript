/*
** Time complexity: O(n^2)
** Space complexity: O(1)
*/

var containsDuplicate = (nums: number[]) => {
    for (let i = 0; i < nums.length; i++) {
        for (let u = 0; u < i; u++) {
            const isDuplicate = nums[i] === nums[u];
            if (isDuplicate) return true;
        }
    }

    return false;
}

const a = containsDuplicate([1, 2, 3]);
const b = containsDuplicate([1, 2, 3, 2]);

console.log({ a, b });

