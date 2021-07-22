/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
 var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let left = 1, right = n;
        
        while(left < right) {
            let mid = left + Math.floor((right - left) / 2), currBad = isBadVersion(mid);
            if(currBad) {
                right = mid;
            } else if(isBadVersion(mid + 1)) {
                return mid + 1
            } else {
                left = mid + 1;
            }
        }

        return left;
    };