class HashArray {
	constructor() {}

	loseHashCode(key) {
		let result = "";
		for (let i = 0; i < key.length; i++) {
			result += key[i];
		}

		return result % 37;
	}
}
