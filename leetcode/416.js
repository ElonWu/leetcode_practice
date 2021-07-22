var canPartition = function(nums) {
    let cache = {}, sum = 0;

    for(let i=0; i<nums.length; i++) {
        sum += nums[i];
    }

    if(sum %2 !== 0) return false;

    let target = sum / 2;

    console.log({target});


    for(let i=0; i<nums.length; i++) {
        const curr = nums[i];

        if(curr === target) return true;
        if(curr > target) continue;

        console.log({curr, cache})
        for(let key in cache) {

            let combine = curr + parseInt(key);

            console.log({key, combine});

            if(combine === target) return true;

            if(combine<target) cache[combine] = true;
        }
        cache[curr] = true;
    }

    return false;
};


const source = [3,3,3,4,5];

console.log( canPartition(source) );