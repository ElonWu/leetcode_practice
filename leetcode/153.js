/**
 * @param {number[]} nums
 * @return {number}
 */
 var findMin = function(nums) {
    let left =0, right = nums.length - 1;


    while(left <= right) {
        let mid = left + Math.floor((right - left) / 2), curr = nums[mid];

        console.log({left, right, mid, curr})


        if(curr < nums[left]) {
            right = mid ;
        } else if(curr > nums[right]) {
            left = mid + 1;
        } else {
            return left
        }
    }
};


console.log(findMin([0]))