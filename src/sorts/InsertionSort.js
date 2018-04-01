Array.prototype.InsertionSort = function() {
  for (let i = 0; i < this.length; i++) {
    let temp = this[i];
    let j = i - 1;
    while (j >= 0 && this[j] > temp) {
      this[j + 1] = this[j];
      j--;
    }
    this[j + 1] = temp;
  }
  return this;
}
