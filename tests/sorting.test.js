const { Bubblesort } = require('../src/sorts/BubbleSort');
const { Heapsort } = require('../src/sorts/HeapSort');
const { Insertionsort } = require('../src/sorts/InsertionSort');
const { Mergesort } = require('../src/sorts/MergeSort');
const { Quicksort } = require('../src/sorts/QuickSort');
const { Shellsort } = require('../src/sorts/ShellSort');
const { Introsort } = require('../src/sorts/IntroSort');

let array = [];

// Initialize array (1000 elements) array with random numbers
beforeEach(() => {
  return array = Array.from({length: 1e4}, () => Math.floor(Math.random() * 1e3));
});

describe('BubbleSort', () => {
  test('should sort', () => {

    // Check if array is in random order
    expect(isSorted(array)).toBeFalsy();

    // Then check if it sorts
    expect(isSorted(array.Bubblesort())).toBeTruthy();
  })
});

describe('HeapSort', () => {
  test('should sort', () => {
    expect(isSorted(array)).toBeFalsy();
    expect(isSorted(array.Heapsort())).toBeTruthy();
  })
});

describe('MergeSort', () => {
  test('should sort', () => {
    expect(isSorted(array)).toBeFalsy();
    expect(isSorted(array.Mergesort())).toBeTruthy();
  })
});

describe('InsertionSort', () => {
  test('should sort', () => {
    expect(isSorted(array)).toBeFalsy();
    expect(isSorted(array.Insertionsort())).toBeTruthy();
  })
});

describe('ShellSort', () => {
  test('should sort', () => {
    expect(isSorted(array)).toBeFalsy();
    expect(isSorted(array.Shellsort())).toBeTruthy();
  })
});

describe('QuickSort', () => {
  test('should sort', () => {
    expect(isSorted(array)).toBeFalsy();
    expect(isSorted(array.Quicksort())).toBeTruthy();
  })
});

describe('IntroSort', () => {
  test('should sort', () => {
    expect(isSorted(array)).toBeFalsy();
    expect(isSorted(array.Introsort())).toBeTruthy();
  })
});

// Basic utility to check if array is sorted
function isSorted(array) {
  for (let i = 1; i < array.length; i++) {
    if (array[i - 1] - array[i] > 0)
    return false;
  }
  return true;
}
