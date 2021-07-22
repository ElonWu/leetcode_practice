// 计数排序
// 将每个元素插入到一个空数组中， 其下标等于其值，存储值为出现的次数
// 再建一个新数组， 循环生成的数组， 依次将值按照数量加入改新数组， 返回新数组

function countingSort(arr) {
	let cache = {};

	for (let i = 0; i < arr.length; i++) {
		cache[arr[i]] =
			typeof cache[arr[i]] === "number" ? cache[arr[i]] + 1 : 1;
	}

	let result = [];

	for (let key in cache) {
		result = result.concat(new Array(cache[key]).fill(parseInt(key)));
	}

	return result;
}

let source = [2, 10, 3, 3, 6, 1, 7, 8, 8, 11, 7, 9, 5, 2, 1, 7, 8, 9, 8, 7, 9];

console.log(countingSort(source));
