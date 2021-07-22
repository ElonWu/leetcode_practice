/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
    let left = 0, right = nums.length - 1, mid;

    while(left <= right) {
        mid = left + Math.floor((right - left) / 2); // 相对于求和除以2， 避免了大数相加溢出

        if(nums[mid] === target) return mid;

        nums[mid] < target ? left = mid + 1 : right = mid - 1;
    }
    return -1;
};