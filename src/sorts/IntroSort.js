const { HeapSort } = require('./HeapSort');
const { InsertionSort } = require('./InsertionSort');
const { QuickSort } = require('./QuickSort');

Array.prototype.IntroSort = function() {
  IntrospectiveSort(this, this.length, Math.floor(2*Math.log2(this.length)));
  return this.InsertionSort();
}

function IntrospectiveSort (array, N, M) {
  let i;
  if (M <= 0) {
    array.HeapSort();
    return;
  }
  i = array.QuickSort();
  if (i > 9)
    IntrospectiveSort(array, i, M-1);
  if (N-1-i > 9)
    IntrospectiveSort(array+i+1, N-1-i, M-1);
}
