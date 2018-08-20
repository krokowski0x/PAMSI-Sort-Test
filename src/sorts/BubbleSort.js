Array.prototype.Bubblesort = function() {
	for (let i = this.length - 1; i >= 0; i--) {
		for (let j = this.length - i; j >= 0; j--) {
			if (this[j] < this[j - 1])
				[this[j], this[j - 1]] = [this[j - 1], this[j]];
		}
	}
	return this;
};
