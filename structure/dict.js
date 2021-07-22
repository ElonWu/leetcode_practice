class Dict {
	constructor() {
		this.dict = {};
	}

	set(key, val) {
		this.dict[key] = val;
	}

	get(key) {
		return this.dict[key] || null;
	}

	has(key) {
		return this.dict[key] !== undefined;
	}

	delete(key) {
		delete this.dict[key];
		return null;
	}
}

let dict = new Dict();

dict.set("a", 1);
console.log(dict.has("a"));
console.log(dict.get("a"));
console.log(dict.delete("a"));
console.log(dict.has("a"));
console.log(dict.get("a"));
