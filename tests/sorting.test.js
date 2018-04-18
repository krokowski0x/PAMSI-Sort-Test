const { BubbleSort } = require('../src/sorts/BubbleSort');
const { HeapSort } = require('../src/sorts/HeapSort');
const { InsertionSort } = require('../src/sorts/InsertionSort');
const { MergeSort } = require('../src/sorts/MergeSort');
const { QuickSort } = require('../src/sorts/QuickSort');
const { ShellSort } = require('../src/sorts/ShellSort');
const { IntroSort } = require('../src/sorts/IntroSort');

let small = [];

beforeEach(() => {
  return small = Array.from({length: 1e3}, () => Math.floor(Math.random() * 1e3));
});

describe('BubbleSort', () => {
  test('should sort', () => {
    expect(isSorted(small)).toBeFalsy();
    expect(isSorted(small.BubbleSort())).toBeTruthy();
  })
});

describe('HeapSort', () => {
  test('should sort', () => {
    expect(isSorted(small)).toBeFalsy();
    expect(isSorted(small.HeapSort())).toBeTruthy();
  })
});

describe('MergeSort', () => {
  test('should sort', () => {
    expect(isSorted(small)).toBeFalsy();
    expect(isSorted(small.MergeSort())).toBeTruthy();
  })
});

describe('InsertionSort', () => {
  test('should sort', () => {
    expect(isSorted(small)).toBeFalsy();
    expect(isSorted(small.InsertionSort())).toBeTruthy();
  })
});

describe('ShellSort', () => {
  test('should sort', () => {
    expect(isSorted(small)).toBeFalsy();
    expect(isSorted(small.ShellSort())).toBeTruthy();
  })
});

describe('QuickSort', () => {
  test('should sort', () => {
    expect(isSorted(small)).toBeFalsy();
    expect(isSorted(small.QuickSort())).toBeTruthy();
  })
});

describe('IntroSort', () => {
  test('should sort', () => {
    expect(isSorted(small)).toBeFalsy();
    expect(isSorted(small.IntroSort())).toBeTruthy();
  })
});

function isSorted(array) {
  for (let i = 1; i < array.length; i++) {
    if (array[i - 1] - array[i] > 0)
    return false;
  }
  return true;
}
