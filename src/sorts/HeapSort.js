Array.prototype.Heapsort = function() {
  let N = this.length;
   // Build heap (rearrange array)
    for (let i = N / 2 - 1; i >= 0; i--)
        heapify(this, N, i);

    // One by one extract an element from heap
    for (let i = N-1; i >= 0; i--) {
      [this[0], this[i]] = [this[i], this[0]];
      heapify(this, i, 0);
    }

  return this;
};

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
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    heapify(arr, n, largest);
  }
};
