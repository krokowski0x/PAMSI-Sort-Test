Array.prototype.BubbleSort = function() {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < this.length; i++) {
      if (this[i] && this[i + 1] && this[i] > this[i + 1]) {
        swap(this, i, i + 1);
        swapped = true;
      }
    }
  } while(swapped);
  return this;
}

function swap(array, i, j) {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}
