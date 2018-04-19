import registerPromiseWorker from 'promise-worker/register';

const xs = { len: 10000 };
const s = { len: 50000 };
const m = { len: 100000 };
const l = { len: 500000 };
const xl = { len: 1000000 };
const arrays = { xs, s, m, l, xl };

registerPromiseWorker( msg => {
  switch (msg.work) {
    case 'Initialize':
      return doStuff();
      break;
    case 'Sort':
      return getStats();
      break;
    default:
      throw new Error('Unknown work type.');
  }
});

// Mock for GET /arraysInit
const doStuff = () => {
  return Array.from({length: 1e6}, () => Math.floor(Math.random() * 1e6)).sort();
}

// Mock for GET /stats/Heap
const getStats = () => {
let dumbComputation = Array.from({length: 1e6}, () => Math.floor(Math.random() * 1e6)).sort();
return {
    "rand": {
        "xs": "16.850",
        "s": "54.566",
        "m": "89.412",
        "l": "447.756",
        "xl": "1167.310"
    },
    "25%": {
        "xs": "17.600",
        "s": "48.928",
        "m": "74.742",
        "l": "348.154",
        "xl": "863.489"
    },
    "50%": {
        "xs": "6.696",
        "s": "35.521",
        "m": "75.736",
        "l": "355.936",
        "xl": "924.750"
    },
    "75%": {
        "xs": "7.382",
        "s": "36.496",
        "m": "76.134",
        "l": "371.651",
        "xl": "849.366"
    },
    "95%": {
        "xs": "6.899",
        "s": "39.675",
        "m": "73.290",
        "l": "352.326",
        "xl": "764.724"
    },
    "99%": {
        "xs": "8.271",
        "s": "49.680",
        "m": "93.711",
        "l": "333.970",
        "xl": "771.837"
    },
    "99,7%": {
        "xs": "6.808",
        "s": "35.549",
        "m": "69.074",
        "l": "347.663",
        "xl": "841.954"
    },
    "reverse": {
        "xs": "19.307",
        "s": "85.726",
        "m": "163.938",
        "l": "881.115",
        "xl": "1952.640"
    }
  }
}
