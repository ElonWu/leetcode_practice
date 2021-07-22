class ElonSet {
	constructor(vals = []) {
		vals = Array.isArray(vals) ? vals : [...arguments];

		this.items = {};

		for (let key of vals) {
			if (this.items[key] === undefined) {
				this.items[key] = key;
			}
		}
	}

	has(key) {
		return this.items.hasOwnProperty(key);
	}

	add(key) {
		if (this.has(key)) return false;
		this.items[key] = key;
		return key;
	}

	remove(key) {
		if (this.has(key)) {
			const val = this.items[key];
			delete this.items[key];
			return val;
		}
	}

	size() {
		return Object.keys(this.items).length;
	}

	values() {
		return Object.values(this.items);
	}

	// 并集
	union(set) {
		if (!(set instanceof ElonSet)) return null;
		let unionSet = new ElonSet();

		for (let key of this.values()) {
			unionSet.add(key);
		}

		for (let key of set.values()) {
			unionSet.add(key);
		}

		return unionSet;
	}

	// 交集
	intersection(set) {
		if (!(set instanceof ElonSet)) return null;
		let intersectionSet = new ElonSet();

		for (let key of this.values()) {
			if (set.has(key)) intersectionSet.add(key);
		}

		return intersectionSet;
	}

	// 差集
	diff(set) {
		if (!(set instanceof ElonSet)) return null;
		let diffSet = new ElonSet();

		for (let key of this.values()) {
			if (!set.has(key)) diffSet.add(key);
		}

		return diffSet;
	}

	clear() {
		this.items = {};
	}

	forEach(cb) {
		for (let key of this.values()) {
			this.items[key] = cb(key, key, this);
		}
	}
}

const set1 = new ElonSet(["a", "b", "c"]);
const set2 = new ElonSet(["x", "b", "z"]);

// console.log("union", set1.union(set2).values());
// console.log("intersection", set1.intersection(set2).values());

// console.log("1diff2", set1.diff(set2).values());
// console.log("2diff1", set2.diff(set1).values());

set1.forEach((key, value, set) => value + set.size());
console.log(set1.values());
