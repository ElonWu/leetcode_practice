var FreqStack = function () {
	this.hashTable = {};
	this.list = [];
};

/**
 * @param {number} x
 * @return {void}
 */
FreqStack.prototype.push = function (x) {
	let currFeq = (this.hashTable[x] = (this.hashTable[x] || 0) + 1);

	let curr = { feq: currFeq, val: x };

	for (let i = this.list.length - 1; i >= 0; i--) {
		if (currFeq >= this.list[i].feq) {
			this.list.splice(i + 1, 0, curr);
			return;
		}
	}
	this.list.unshift(curr);
};

/**
 * @return {number}
 */
FreqStack.prototype.pop = function () {
	let { val } = this.list.pop();
	this.hashTable[val] -= 1;
	return val;
};

let feqStack = new FreqStack();

feqStack.push(5);
feqStack.push(7);
feqStack.push(5);
feqStack.push(7);
feqStack.push(4);
feqStack.push(5);

// console.log(feqStack);
// console.log("------------------");
console.log(feqStack.pop());

// console.log(feqStack);
// console.log("------------------");
console.log(feqStack.pop());

// console.log(feqStack);
// console.log("------------------");
console.log(feqStack.pop());

// console.log(feqStack);
// console.log("------------------");
console.log(feqStack.pop());

// console.log(feqStack);
// console.log("------------------");

console.log(feqStack.pop());
