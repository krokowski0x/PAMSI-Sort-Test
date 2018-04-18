Array.prototype.HeapSort = function() {
  let N = this.length;
   // Build heap (rearrange array)
    for (let i = N / 2 - 1; i >= 0; i--)
        heapify(this, N, i);

    // One by one extract an element from heap
    for (let i = N-1; i >= 0; i--) {
        swap(this, 0, i);
        heapify(this, i, 0);
    }

  return this;
}

function swap(array, i, j) {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

function heapify(arr, n, i) {
    let largest = i;
    let l = 2*i + 1;
    let r = 2*i + 2;

    // If left child is larger than root
    if (l < n && arr[l] > arr[largest])
        largest = l;

    // If right child is larger than largest so far
    if (r < n && arr[r] > arr[largest])
        largest = r;

    // If largest is not root
    if (largest !== i) {
        swap(arr, i, largest);
        heapify(arr, n, largest);
    }
}
