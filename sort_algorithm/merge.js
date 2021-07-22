// 归并排序
// 将数组分成两份（直到无法再分）， 分别对两部分进行归并排序， 然后合并
// 合并： 依次比较首个元素， 小的一方 shift 到结果

function mergeSort(arr) {
	let len = arr.length;

	if (len < 2) return arr;

	let mid = Math.floor(len / 2),
		left = arr.slice(0, mid),
		right = arr.slice(mid);

	return merge(mergeSort(left), mergeSort(right));
}

// 合并数组
function merge(arr1, arr2) {
	console.log({ arr1, arr2 });
	let result = [];

	while (arr1.length && arr2.length) {
		if (arr1[0] > arr2[0]) {
			result.push(arr2.shift());
		} else {
			result.push(arr1.shift());
		}
	}

	if (arr1.length === 0) return result.concat(arr2);
	if (arr2.length === 0) return result.concat(arr1);
}

let source = [2, 10, 3, 3, 6, 5, 2, 1, 7, 8, 9, 8, 7, 9];

console.log(mergeSort(source));
