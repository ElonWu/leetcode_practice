var findMedianSortedArrays = function(nums1, nums2) {
    let len1 = nums1.length, 
        len2 = nums2.length, 
        totalLen = len1 + len2, 
        isTotalLenOdd = Boolean(totalLen % 2),

        // 两个数组最小值的下标
        i = 0, 
        j = 0, 

        // 已过滤的最大值
        max, 
        // 上一个最大值
        last = 0;

    // 取多少个倒数最小的数
    const targetCount = isTotalLenOdd ? Math.floor(totalLen / 2) : (totalLen / 2);
    
    for(let k = 0; k <=targetCount; k++) {
        if(k === targetCount) last = max; // 记录上一个最大

        // 判断为过滤的数字中最小的数， 并记录为以过滤的最大；
        const moveNums1 = (nums1[i] <= nums2[j] && i < len1) || (j === len2);
        
        max = moveNums1 ? nums1[i++] : nums2[j++];
    }

    // 总数量为奇数时， 目标数为中位数， 否则是目标值和上一个数字的平均值
    return  isTotalLenOdd ? max : (last + max)/2;
};

const source = [
    [1,2,5],
    [3,4]
];


console.log(findMedianSortedArrays(...source))