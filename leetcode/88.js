/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let j = 0;

  for (let i = 0; i < nums1.length; i++) {
    if (j >= n) break;

    let nums1Left = m - (i - j);

    if (!nums1Left || nums2[j] < nums1[i]) {
      // nums1 全体后退
      let prev = nums1[i];
      for (let k = 1; k <= nums1Left; k++) {
        let temp = nums1[i + k];
        nums1[i + k] = prev;
        prev = temp;
      }

      // nums2 当前成员进入位置
      nums1[i] = nums2[j++];
    }
  }
};

let nums1 = [1, 2, 3, 0, 0, 0],
  m = 3,
  nums2 = [2, 5, 6],
  n = 3;

merge(nums1, m, nums2, n);

console.log(nums1);
// 输出：[1,2,2,3,5,6]
