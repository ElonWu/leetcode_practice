/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function(nums, target) {
    let left = 0, right = nums.length - 1;

    while(left <= right) {
        let mid = left + Math.floor((right - left) / 2), curr = nums[mid];

        if(target === curr) return mid;

        if(target < curr) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return left;
};