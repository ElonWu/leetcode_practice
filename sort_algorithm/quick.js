// 快速排序
// 选定一个中间点， 将数组分为大于和小于中间点两部分
// 递归对小于和大于部分实行快排， 返回 小+中+大

function quickSort(arr) {
	let len = arr.length;

	if (len <= 1) return arr;

	const index = Math.floor(Math.random() * len); // 随机

	let pivot = arr[index];
	let mid = [],
		left = [],
		right = [];

	for (let i = 0; i < len; i++) {
		let curr = arr[i];

		if (curr < pivot) {
			left.push(curr);
		} else if (curr > pivot) {
			right.push(curr);
		} else {
			mid.push(curr);
		}
	}

	console.log({ left, mid, right });

	return quickSort(left).concat(mid, quickSort(right));
}

let source = [2, 10, 3, 3, 6, 5, 2, 1, 7, 8, 9, 8, 7, 9];

console.log(quickSort(source));
