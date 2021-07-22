/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var searchRange = function(nums, target) {
    let left = 0, right = nums.length - 1;


    while(left <= right) {
        let mid = left + Math.floor((right - left) / 2), curr = nums[mid];

        if(curr === target) return [
            left + findLeft(nums.slice(left, mid+1), target), 
            mid + findRight(nums.slice(mid, right+1), target)
        ];


        if(curr < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return [-1, -1];
};


var findLeft = function (nums, target) {
    console.log({left: nums})
    let left = 0, right = nums.length - 1;
    while(left <= right) {
        let mid = left + Math.floor((right - left) / 2), curr = nums[mid];

        if(curr === target) {
            right = mid - 1;
        } else {
            left = mid + 1
        }
    }
    console.log({left})
    return left;
}

var findRight = function (nums, target) {
    console.log({right: nums})
    let left = 0, right = nums.length - 1;
    while(left <= right) {
        let mid = left + Math.ceil((right - left) / 2), curr = nums[mid];

        if(curr === target) {
            left = mid + 1;
        } else {
            right = mid - 1
        }
    }
    console.log({right})
    return right;
}

// console.log(findLeft([3, 8, 8], 8));
// console.log(findRight([8, 8, 8, 9, 10], 8));
console.log(searchRange([3, 4, 5, 6, 8, 8, 9, 10, 11, 12, 13,15, 18, 19 , 22, 25], 8));