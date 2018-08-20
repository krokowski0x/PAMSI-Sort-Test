const { Heapsort } = require("./HeapSort");
const { Insertionsort } = require("./InsertionSort");

Array.prototype.Introsort = function() {
	return IntrospectiveSort(
		this,
		0,
		this.length - 1,
		Math.floor(2 * Math.log2(this.length))
	);
};

function IntrospectiveSort(array, begin, end, M) {
	let N = end - begin;
	let partitionIndex = partition(array, 0, N);
	if (N < 16) return array.Insertionsort();
	if (M <= partitionIndex) return array.Heapsort();

	IntrospectiveSort(array, begin, partitionIndex - 1, M - 1);
	IntrospectiveSort(array, partitionIndex + 1, end, M - 1);

	return array;
}

function partition(items, left, right) {
	let pivot = items[Math.floor((right + left) / 2)];
	let i = left;
	let j = right;

	while (i <= j) {
		while (items[i] < pivot) i++;
		while (items[j] > pivot) j--;
		if (i <= j) {
			[items[i], items[j]] = [items[j], items[i]];
			i++;
			j--;
		}
	}
	return i;
}
