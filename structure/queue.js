class Queue {
	constructor(list = []) {
		this.list = list;
	}

	get() {
		return this.list;
	}

	push(val) {
		this.list.push(val);
	}

	pop() {
		return this.list.shift();
	}

	// 击鼓传花， 循环队列
	takeTurn(time) {
		for (let i = 0; i < this.list.length; i++) {
			while (true) {
				let curr = this.pop();
				if (this.list.length === 0) return curr;

				if ((i + 1) % time) this.push(curr);

				i++;
			}
		}
	}
}

// let queue = new Queue(["a", "b", "c"]);
// console.log(queue.takeTurn(3));

// 优先队列
class PriorityQueue extends Queue {
	get() {
		return this.list.map((el) => el.value);
	}

	push(value, priority) {
		const currItem = new PriorityQueueItem(value, priority);

		for (let i = 0; i < this.list.length; i++) {
			if (priority > this.list[i].priority) {
				this.list.splice(i, 0, currItem);
				return;
			}
		}

		this.list.push(currItem);
	}
}

class PriorityQueueItem {
	constructor(value, priority) {
		this.value = value;
		this.priority = priority;
	}
}

let priorityQueue = new PriorityQueue();

priorityQueue.push("a", 9);
priorityQueue.push("b", 7);
priorityQueue.push("c", 12);
priorityQueue.push("d", 8);

console.log(priorityQueue.get());
