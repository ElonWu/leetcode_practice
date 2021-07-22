/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
    let i = 0;

    for(; i < nums.length-1; i++) {
        if(nums[i+1] < nums[i]) break;
    }

    let left = 0, right = nums.length - 1;

    while(left <= right) {
        let mid = left + Math.floor((right - left) / 2), 
            twistedIndex = (mid + i + 1 + nums.length) % nums.length,
            curr = nums[twistedIndex];

            console.log({left, right, mid, twistedIndex})

        if(curr === target) return twistedIndex;

        if(curr > target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return -1;
};


// search([7,0,1,2], 0);

console.log(search([4,5,6,7,0,1,2], 0))