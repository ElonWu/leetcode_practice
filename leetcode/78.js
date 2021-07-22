// var subsets = function(nums) {
//     let count = Math.pow(2, nums.length);

//     let result = [];

//     for(let i=0; i<count; i++) {
//         let str = i.toString(2), curr = [];

//         for(let j=0; j<str.length; j++) {
//             if(str[j] === "1") curr.push(nums[nums.length - str.length + j])
//         }
//         result.push(curr)
//     }

//     return result;
// };

// var subsets = function(nums) {
//     if(nums.length === 0) return [[]];

//     let curr = nums[0], nextArr = subsets(nums.slice(1));

//     return nextArr.concat(nextArr.map(el => [...el, curr]));
// }


var subsets = function(nums) {
    let result =[[]];

    for(let i=0; i<nums.length; i++) {
        result.forEach(curr => result.push(curr.concat(nums[i])))
    }
    
    return result;
}

const source = [1,2,3];


console.log(subsets(source));