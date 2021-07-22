/**
 * @param {number[]} nums
 * @return {number}
 */
 var findPeakElement = function(nums) {
    for(let i=0; i<nums.length; i++) {
        let prev = nums?.[i-1] ?? -Infinity,
         next = nums?.[i+1] ?? -Infinity;

        if(nums[i] >= prev && nums[i] >= next) return i;
    }
};