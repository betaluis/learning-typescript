var containsDuplicate = (nums: number[], numSet: Set<number> = new Set()): boolean => {
    for (const num of nums) {
        if (numSet.has(num)) return true;
        numSet.add(num);
    }

    return false;
}

const a = containsDuplicate([1,2,3]);
const b = containsDuplicate([1,2,3,1,2,3]);

console.log({ a, b });

// Time Complexity: O(n)
// Space Complexity: O(n)
