Array.prototype.QuickSort = function() {
if (this.length < 2) {
    return this;
  }

  let middle = this[0];
  let lesser = [];
  let greater = [];

  for (let i = 1; i < this.length; i++) {
    if (this[i] < middle) {
      lesser.push(this[i]);
    } else {
      greater.push(this[i]);
    }
  }
  return lesser.QuickSort().concat(middle, greater.QuickSort());
}
