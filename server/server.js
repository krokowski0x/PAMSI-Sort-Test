// For accurate performance.now() time measurement
const { performance } = require('perf_hooks');
const express = require('express');
const app = express();
const throng = require('throng');

// 3000 in local enviroment and PORT for Heroku
const PORT = process.env.PORT || 3000;

// Workers are substitute for node clusters
const WORKERS = process.env.WEB_CONCURRENCY || 1;

// Node cluster replacement for Heroku deployment
throng({
  workers: WORKERS,
  lifetime: Infinity
}, start);

// Import all sort types
const { Bubblesort } =    require('../src/sorts/BubbleSort');
const { Heapsort } =      require('../src/sorts/HeapSort');
const { Insertionsort } = require('../src/sorts/InsertionSort');
const { Mergesort } =     require('../src/sorts/MergeSort');
const { Quicksort } =     require('../src/sorts/QuickSort');
const { Shellsort } =     require('../src/sorts/ShellSort');
const { Introsort } =     require('../src/sorts/IntroSort');

// Arrays lengths
let xs = { len: 10000 };
let s =  { len: 50000 };
let m =  { len: 100000 };
let l =  { len: 500000 };
let xl = { len: 1000000 };
let arrays = { xs, s, m, l, xl };

// Stats are arranged in reverse order for easier plotting
let stats = {
  'rand': {},
  '25%': {},
  '50%': {},
  '75%': {},
  '95%': {},
  '99%': {},
  '99,7%': {},
  'reverse': {}
};

// Indicates if arrays have been initialized
let arraysReady = false;

function start() {

// Serve everything in dist/ folder
app.use(express.static('dist'));

// Initial endpoint, fires when the app starts
app.get('/arraysInit', (request, response) => {
  try {
    arrays = setup(arrays);
    response.status(200).send('Arrays has been initialized!');
  } catch (err) {
    response.status(400).send(err);
  }
});

// Perform all sorts with given sortType
app.get('/stats/:sortType', (request, response) => {
  try {
    const type = request.params.sortType;

    for (let field in stats)
      runSorting(field, type);
    response.status(200).send(stats);
  } catch (err) {
    response.status(400).send(err);
  }
});

app.listen(PORT, () => console.log('Sort Test app is running on port 3000!'));

const setup = (arrays) => {
  for (let array in arrays) {

    // Rand is generated based on len property
    arrays[array]['rand'] = Array.from({length: arrays[array]['len']}, () => Math.floor(Math.random() * arrays[array]['len']));

    let a = arrays[array]['rand'];

    // a is split in two parts, one is sorted and they're concatenated again
    arrays[array]['reverse'] =   a.concat().sort((a,b) => b-a);
    arrays[array]['25%'] =   [...a.concat().sort((a,b) => a-b).slice(0, arrays[array]['len']*0.25),  ...a.concat().slice(0, arrays[array]['len']*0.75)];
    arrays[array]['50%'] =   [...a.concat().sort((a,b) => a-b).slice(0, arrays[array]['len']*0.5),   ...a.concat().slice(0, arrays[array]['len']*0.5)];
    arrays[array]['75%'] =   [...a.concat().sort((a,b) => a-b).slice(0, arrays[array]['len']*0.75),  ...a.concat().slice(0, arrays[array]['len']*0.25)];
    arrays[array]['95%'] =   [...a.concat().sort((a,b) => a-b).slice(0, arrays[array]['len']*0.95),  ...a.concat().slice(0, arrays[array]['len']*0.05)];
    arrays[array]['99%'] =   [...a.concat().sort((a,b) => a-b).slice(0, arrays[array]['len']*0.99),  ...a.concat().slice(0, arrays[array]['len']*0.01)];
    arrays[array]['99,7%'] = [...a.concat().sort((a,b) => a-b).slice(0, arrays[array]['len']*0.997), ...a.concat().slice(0, arrays[array]['len']*0.003)];
  }
  arraysReady = true;
  return arrays;
}

// Do the sort, return stats
const runSorting = (field, sortType) => {
  let start = 0;
  let end = 0;
  let time = 0;

  if (arraysReady) {
    for (let array in arrays) {
      start = performance.now();
      arrays[array][field][sortType]();
      end = performance.now();
      time = end - start;
      stats[field][array] = time.toFixed(3);
    }
    return stats;
  } else {
    throw new Error('You can\'t sort arrays before initializing them!');
  }
}
}
