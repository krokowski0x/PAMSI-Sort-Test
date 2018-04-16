const { performance } = require('perf_hooks');
const { CPUs } = require('os').cpus().length;
const cluster = require('cluster');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const { BubbleSort } = require('./src/sorts/BubbleSort');
const { HeapSort } = require('./src/sorts/HeapSort');
const { InsertionSort } = require('./src/sorts/InsertionSort');
const { MergeSort } = require('./src/sorts/MergeSort');
const { QuickSort } = require('./src/sorts/QuickSort');
const { ShellSort } = require('./src/sorts/ShellSort');
const { IntroSort } = require('./src/sorts/IntroSort');

let xs = { len: 10000 };
let s =  { len: 50000 };
let m =  { len: 100000 };
let l =  { len: 500000 };
let xl = { len: 1000000 };
let arrays = { xs, s, m, l, xl };
let stats = {'xs': {}, 's': {}, 'm': {}, 'l': {}, 'xl': {}};
let arraysReady = false;

app.use(express.static('dist'));

app.get('/arraysInit', (request, response) => {
  try {
    arrays = setup(arrays);
    response.status(200).send('Arrays has been initialized!');
  } catch (err) {
    response.status(400).send(err);
  }
});

app.get('/stats/:sortType', (request, response) => {
  try {
    const type = request.params.sortType;
    // Here we should have 8 independent workers
    runSorting('rand', type);
    runSorting('25%', type);
    runSorting('50%', type);
    runSorting('75%', type);
    runSorting('95%', type);
    runSorting('99%', type);
    runSorting('99,7%', type);
    runSorting('reverse', type);
    response.status(200).send(stats);
  } catch (err) {
    response.status(400).send(err);
  }
});


app.listen(port, () => console.log('Sort Test app is running on port 3000!'));

const setup = (arrays) => {
  for (let array in arrays) {
    arrays[array]['rand'] = Array.from({length: arrays[array]['len']}, () => Math.floor(Math.random() * arrays[array]['len']));

    let a = arrays[array]['rand'];
    arrays[array]['reverse'] =   a.concat().sort((a,b) => b-a);
    arrays[array]['25%'] =   [...a.concat().sort((a,b) => a-b).slice(0, arrays[array]['len']*0.25),  ...a.concat().slice(0, arrays[array]['len']*0.75)];
    arrays[array]['50%'] =   [...a.concat().sort((a,b) => a-b).slice(0, arrays[array]['len']*0.5),   ...a.concat().slice(0, arrays[array]['len']*0.5)];
    arrays[array]['75%'] =   [...a.concat().sort((a,b) => a-b).slice(0, arrays[array]['len']*0.75),  ...a.concat().slice(0, arrays[array]['len']*0.25)];
    arrays[array]['95%'] =   [...a.concat().sort((a,b) => a-b).slice(0, arrays[array]['len']*0.95),  ...a.concat().slice(0, arrays[array]['len']*0.05)];
    arrays[array]['99%'] =   [...a.concat().sort((a,b) => a-b).slice(0, arrays[array]['len']*0.99),  ...a.concat().slice(0, arrays[array]['len']*0.01)];
    arrays[array]['99,7%'] = [...a.concat().sort((a,b) => a-b).slice(0, arrays[array]['len']*0.997), ...a.concat().slice(0, arrays[array]['len']*0.003)];

    delete arrays[array]['len'];
  }

  arraysReady = true;
  return arrays;
}

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
      stats[array][field] = `It took ${time.toFixed(3)} ms.`;
    }
    console.log('Done!');
    return stats;
  } else {
    throw new Error('You can\'t sort arrays before initializing them!');
  }
}
