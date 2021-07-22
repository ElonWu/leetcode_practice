var findDisappearedNumbers = function(nums) {
    let n=nums.length, arr = Array.from(new Array(n), (_, i) => i+1);
    
    for(let i=0; i<n; i++) {
        arr[nums[i] - 1] = null;
    }

    return arr.filter(Boolean);
};


const source = [4,3,2,7,8,2,3,1];

console.log(findDisappearedNumbers(source))