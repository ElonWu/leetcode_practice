

var judgePoint24 = function(nums) {
    // 测试 1 + 3 组合
    // for(let i=0; i< 4; i++) {
    //     let arr =  nums.slice(), first = arr.splice(i, 1);
    //     if(
    //         combineThreeTarget(arr, first - 24) ||
    //         combineThreeTarget(arr, 24 - first) ||
    //         combineThreeTarget(arr, first / 24) ||
    //         combineThreeTarget(arr, 24 / first)
    //     )  {
    //         console.log("1+3")
    //         console.log({nums, first})
    //         return true;
    //     }
    // }

    // 测试 2 + 2 组合
    for(let i=0; i< 3; i++) {
        let arr =  nums.slice(1), first = arr.splice(i, 1);

        let combines = combineTwo([nums[0], first]);


        console.log({arr, combines})

        for(let target of combines) {
            // console.log({arr, target})
            if( target === 0 ) {
                if(combineTwoTarget(arr, 24)) {
                    console.log("2+2");
                    console.log({arr, combines})
                    return true
                };
            } else if(
                combineTwoTarget(arr, target - 24) ||
                combineTwoTarget(arr, 24 - target) ||
                combineTwoTarget(arr, target / 24) ||
                combineTwoTarget(arr, 24 / target)
            ) {
                console.log("2+2")
                console.log({arr, combines})
                return true;
            }
        }
    }

    return false;
};



function combineTwo([a, b]) {
    return [
        a*1 + b*1,
        a-b,
        b-a,
        a*b,
        a/b,
        b/a
    ]
    // .filter( el => Math.abs(el)%1 === 0);
}


function combineThreeTarget(arr, target) {
    for(let i=0; i<arr.length; i++) {
        let nums = arr.slice(), first = nums.splice(i, 1);
        if(
            combineTwoTarget(nums, target - first) ||
            combineTwoTarget(nums, first - target) ||
            combineTwoTarget(nums, target / first) ||
            combineTwoTarget(nums, first / target)
        ) {
            // console.log({nums, target, first})
            return true;
        }
    }

    return false;
}

function combineTwoTarget(arr, target) {
    if(target === 21) console.log({arr})
    return combineTwo(arr).includes(target);
}




console.log(judgePoint24([3,3,7,7]))

