// 插入排序
// 每个元素，依次与前面的全部元素比较，小于就交换，大于就停止。

function insertionSort(arr) {
	for (let i = 1; i < arr.length; i++) {
		let curr = arr[i];

		for (let j = i - 1; j >= 0; j--) {
			if (curr >= arr[j]) break;

			arr[j + 1] = arr[j];
			arr[j] = curr;
		}
	}

	return arr;
}

// 改进版
// 由于arr 靠前的元素逐渐完成了排序
// 后面的元素不需要全部遍历，而是通过二分法，快速找到插入位置
function insertionSort1(arr) {
	for (let i = 1; i < arr.length; i++) {
		// 此时 0 ~ i-1 已经完成了排序, 插入点在中间部分
		let curr = arr[i],
			start = 0,
			end = i - 1;

		// 循环结束时， start 为插入点
		while (start <= end) {
			let mid = parseInt((start + end) / 2);
			if (curr >= arr[mid]) {
				start = mid + 1;
			} else {
				end = mid - 1;
			}
		}

		// 插入点之后直到 i 位置，都替换为前一个元素的值
		for (let j = i - 1; j >= start; j++) {
			arr[j + 1] = arr[j];
		}

		// 插入点更新成 i 位置的值
		arr[start] = curr;
	}

	return arr;
}

let source = [2, 3, 3, 2, 1, 7, 8, 9];

// console.log(insertionSort(source));
console.log(insertionSort1(source));
