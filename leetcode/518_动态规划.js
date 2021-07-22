/**
 * 
 *  给定不同面额的硬币和一个总金额。写出函数来计算可以凑成总金额的硬币组合数。假设每一种面额的硬币有无限个。 
 * 
 */


var change = function(amount, coins) {
    if(amount === 0) return 1;
    if(coins.length === 0) return 0;

    let sum = 0, arr = coins.slice(), max = arr.pop(), maxCount = Math.floor(amount / max);

    if(arr.length === 0) return amount % max === 0 ? 1: 0;

    for(let i=0; i<= maxCount; i++) {
        sum += change(amount - max * i, arr);
    }
    
    return  sum;
};


const amount = 1000;
const coins = [3,5,7,8,9,10,11];


// console.log(change(amount, coins))


console.log(Math.floor(1000 / 11))