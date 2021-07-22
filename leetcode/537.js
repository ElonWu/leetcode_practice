var complexNumberMultiply = function (a, b) {
	const reg = /^(-?[0-9]+)\+(-?[0-9]+)i$/i;

	const [origin_a, a_1, a_2] = reg.exec(a);
	const [origin_b, b_1, b_2] = reg.exec(b);

	return `${a_1 * b_1 - a_2 * b_2}+${a_1 * b_2 + a_2 * b_1}i`;
};

const source = ["1+1i", "1+1i"];

console.log(complexNumberMultiply(...source));
