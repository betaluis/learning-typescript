const containsDuplicate = (nums: number[]): boolean => {
    const set: Set<number> = new Set(nums);
    const isEqual: boolean = set.size === nums.length;
    return !isEqual;
}

const a: boolean = containsDuplicate([1, 2, 3]);
const b: boolean = containsDuplicate([1, 2, 3, 1, 2, 3]);

console.log({ a, b });

// Time Complexity: O(n)
// Space Complexity: O(n)
