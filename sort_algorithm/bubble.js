// 每个元素， 与自己的下一位比较， 如果大于就交换位置

// https://visualgo.net/bn/sorting
function bubbleSort(arr) {
	let lastUnsortedIndex = arr.length - 1;

	// 直到 0 之后全部完成对比为止
	while (lastUnsortedIndex) {
		let unsortedIndex = 0;

		for (let i = 0; i < lastUnsortedIndex; i++) {
			console.log("while 版本", { i });

			if (arr[i] > arr[i + 1]) {
				// 交换位置
				let temp = arr[i];
				arr[i] = arr[i + 1];
				arr[i + 1] = temp;

				// 更新最靠后的修改下标； 说明 i 之后已经完成排序
				unsortedIndex = i;
			}
		}
		lastUnsortedIndex = unsortedIndex;
		console.log({ arr });
	}

	return arr;
}

// https://juejin.im/post/57dcd394a22b9d00610c5ec8
function bubbleSort1(arr) {
	for (var i = 0; i < arr.length; i++) {
		for (var j = 0; j < arr.length - 1 - i; j++) {
			if (arr[j] > arr[j + 1]) {
				//相邻元素两两对比
				var temp = arr[j + 1]; //元素交换
				arr[j + 1] = arr[j];
				arr[j] = temp;
			}
		}

		console.log({ i, arr });
	}
	return arr;
}

function bubbleSort2(arr) {
	let changed = true;
	for (var i = 0; i < arr.length; i++) {
		if (!changed) break;

		changed = false;
		for (var j = 0; j < arr.length - 1 - i; j++) {
			console.log("for 版本", { i, j });

			if (arr[j] > arr[j + 1]) {
				//相邻元素两两对比
				var temp = arr[j + 1]; //元素交换
				arr[j + 1] = arr[j];
				arr[j] = temp;

				changed = true;
			}
		}

		console.log({ i, arr });
	}
	return arr;
}

// let source1 = [10, 4, 9, 5, 8, 6];
let source2 = [3, 4, 2, 1, 7, 8, 9];

let source = [3, 4, 2, 1, 7, 8, 9];

// console.log("冒泡：依次比较");
// bubbleSort1(source1);

console.log("改进冒泡：在任一步未发生变换，立即结束");
bubbleSort2(source2);

console.log("进一步改进：最大值依次移到最末，后不再比较末端部分元素");
bubbleSort(source);
