// 希尔排序
// 插入排序的一种

function shellSort(arr) {
	const len = arr.length;

	for (let gap = Math.floor(len / 2); gap >= 1; gap = Math.floor(gap / 2)) {
		for (let i = gap; i < len; i++) {}
	}
}

let source = [2, 3, 3, 2, 1, 7, 8, 9];

console.log(shellSort(source));

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
