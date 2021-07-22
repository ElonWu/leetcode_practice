var groupThePeople = function (groupSizes) {
	let result = [];

	let obj = {};

	for (let i = 0; i < groupSizes.length; i++) {
		let curr = groupSizes[i];

		obj[curr] = obj[curr] ? [...obj[curr], i] : [i];

		if (obj[curr].length === curr) {
			result.push(obj[curr]);
			obj[curr] = null;
		}
	}

	return result;
};

const source = [3, 3, 3, 3, 3, 1, 3];

console.log(groupThePeople(source));
