const { Bubblesort } = require('../src/sorts/BubbleSort');
const { Heapsort } = require('../src/sorts/HeapSort');
const { Insertionsort } = require('../src/sorts/InsertionSort');
const { Mergesort } = require('../src/sorts/MergeSort');
const { Quicksort } = require('../src/sorts/QuickSort');
const { Shellsort } = require('../src/sorts/ShellSort');
const { Introsort } = require('../src/sorts/IntroSort');

let small = [];

beforeEach(() => {
  return small = Array.from({length: 1e3}, () => Math.floor(Math.random() * 1e3));
});

describe('BubbleSort', () => {
  test('should sort', () => {
    expect(isSorted(small)).toBeFalsy();
    expect(isSorted(small.Bubblesort())).toBeTruthy();
  })
});

describe('HeapSort', () => {
  test('should sort', () => {
    expect(isSorted(small)).toBeFalsy();
    expect(isSorted(small.Heapsort())).toBeTruthy();
  })
});

describe('MergeSort', () => {
  test('should sort', () => {
    expect(isSorted(small)).toBeFalsy();
    expect(isSorted(small.Mergesort())).toBeTruthy();
  })
});

describe('InsertionSort', () => {
  test('should sort', () => {
    expect(isSorted(small)).toBeFalsy();
    expect(isSorted(small.Insertionsort())).toBeTruthy();
  })
});

describe('ShellSort', () => {
  test('should sort', () => {
    expect(isSorted(small)).toBeFalsy();
    expect(isSorted(small.Shellsort())).toBeTruthy();
  })
});

describe('QuickSort', () => {
  test('should sort', () => {
    expect(isSorted(small)).toBeFalsy();
    expect(isSorted(small.Quicksort())).toBeTruthy();
  })
});

describe('IntroSort', () => {
  test('should sort', () => {
    expect(isSorted(small)).toBeFalsy();
    expect(isSorted(small.Introsort())).toBeTruthy();
  })
});

function isSorted(array) {
  for (let i = 1; i < array.length; i++) {
    if (array[i - 1] - array[i] > 0)
    return false;
  }
  return true;
}
