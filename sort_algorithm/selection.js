// 选择排序

// 每个元素，从自身到最右侧选择最小的元素，与自身交换位置

function selectionSort(arr) {
	for (let i = 0; i < arr.length - 1; i++) {
		let minIndex;
		
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[j] < arr[minIndex || i]) minIndex = j;
		}

		if (minIndex) {
			let temp = arr[minIndex];
			arr[minIndex] = arr[i];
			arr[i] = temp;
		}
	}

	return arr;
}

console.time("test");
let source = [1, 2, 3, 4, 7, 4, 8, 9];
console.timeEnd("test");

console.log(selectionSort(source));
