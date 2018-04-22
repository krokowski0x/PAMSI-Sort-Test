Array.prototype.Quicksort = function(left = 0, right = this.length - 1) {
  let partitionIndex;

  if(this.length > 1) {
    partitionIndex = partition(this, left, right);

    if (left < partitionIndex - 1)
      this.Quicksort(left, partitionIndex - 1);
    if (partitionIndex < right)
      this.Quicksort(partitionIndex, right);
  }
  return this;
}

function partition(items, left, right) {
  let pivot = items[Math.floor((right + left) / 2)];
  let i = left;
  let j = right;

  while (i <= j) {
    while (items[i] < pivot) i++;
    while (items[j] > pivot) j--;
    if (i <= j) {
      swap(items, i, j);
      i++;
      j--;
    }
  }
  return i;
}

function swap(arr, i, j){
   let temp = arr[i];
   arr[i] = arr[j];
   arr[j] = temp;
}
