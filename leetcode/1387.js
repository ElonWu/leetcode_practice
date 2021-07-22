var getKth = function (lo, hi, k) {
	const getVal = genGetVal();

	let list = [];

	for (let i = lo; i <= hi; i++) {
		let curr = { key: i, val: getVal(i) };

		if (list.length === 0) {
			list.push(curr);
		} else {
			for (let j = 0; j < list.length; j++) {
				if (curr.val < list[j].val) {
					list.splice(j, 0, curr);
					break;
				}

				if (j === list.length - 1) {
					list.push(curr);
					break;
				}
			}
		}
	}

	return list[k - 1].key;
};

function genGetVal() {
	let cache = { 1: 0 };

	return function getVal(key) {
		if (cache[key] !== undefined) return cache[key];

		let val = 1 + getVal(key % 2 ? key * 3 + 1 : key / 2);
		cache[key] = val;

		return val;
	};
}

console.log(getKth(10, 20, 5));
