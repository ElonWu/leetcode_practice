var compress = function (chars) {
	let result = 0;
	let obj = {};
	for (let i = 0; i < chars.length; i++) {
		obj[chars[i]] = (obj[chars[i]] || 0) + 1;
	}

	for (let key in obj) {
		result += obj[key] === 1 ? 1 : 2;
	}
	console.log({ obj });
	return result;
};
const source = [
	"a",
	"a",
	"b",
	"b",
	"c",
	"c",
	"c",
	"c",
	"c",
	"c",
	"c",
	"c",
	"c",
	"c",
	"c",
	"c",
];

console.log(compress(source));
