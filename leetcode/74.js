/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
 var searchMatrix = function(matrix, target) {
    const row = matrix.length, col = matrix[0].length;
    let left = 0, right = row * col - 1;

    while(left <= right) {
        let mid = left + Math.floor((right - left) / 2), 
            [currRow, currCol] = findPosition(col, mid),
            curr = matrix[currRow][currCol];

        if(curr === target) return true;

        if(curr > target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return false;
};


var findPosition = function(col, mid) {
    let currRow = Math.floor(mid / col), currCol = mid - currRow * col;

    return [currRow, currCol];
}


console.log(searchMatrix([
    [1,3,5,7],
    [10,11,16,20],
    [23,30,34,60]
], 3));