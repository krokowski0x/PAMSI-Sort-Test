Array.prototype.ShellSort = function() {
  let gaps = [];
  for (let i = 1; i < this.length + 1; i++) {
    gaps.push((2**i)-1);
  }
  for (var g = 0; g < gaps.length; g++) {
    let gap = gaps[g];
    for (let i = gap; i < this.length; i++) {
      var temp = this[i];
      for (let j = i; j >= gap && this[j - gap] > temp; j -= gap) {
        this[j] = this[j - gap];
      }
      this[j] = temp;
    }
  }
  return this;
}
