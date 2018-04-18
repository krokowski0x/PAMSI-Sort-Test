Array.prototype.ShellSort = function() {
  let N = this.length;
  let j;

  for (let gap = N; gap > 0; gap = parseInt(gap/2)) {
    for (let i = gap; i < N; i++) {
      let temp = this[i];
      for (j = i; j >= gap && this[j - gap] > temp; j -= gap)
        this[j] = this[j - gap];

      this[j] = temp;
    }
  }
  return this;
}
