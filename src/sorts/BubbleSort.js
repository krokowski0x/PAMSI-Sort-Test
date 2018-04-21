Array.prototype.Bubblesort = function() {
  for (let i = this.length - 1; i >= 0; i--) {
    for (let j = this.length - i; j >= 0; j--) {
      if (this[j] < this[j-1])
        swap(this, j, j-1);
    }
  }
  return this;
}

function swap(array, i, j) {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}
