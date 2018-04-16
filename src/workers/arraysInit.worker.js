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
    "xs": {
        "rand": "7.400",
        "25%": "11.163",
        "50%": "3.624",
        "75%": "3.714",
        "95%": "6.378",
        "99%": "4.811",
        "99,7%": "3.111",
        "reverse": "6.491"
    },
    "s": {
        "rand": "32.492",
        "25%": "33.257",
        "50%": "18.257",
        "75%": "17.036",
        "95%": "31.838",
        "99%": "23.105",
        "99,7%": "16.878",
        "reverse": "36.330"
    },
    "m": {
        "rand": "61.466",
        "25%": "56.477",
        "50%": "35.990",
        "75%": "37.707",
        "95%": "68.901",
        "99%": "56.654",
        "99,7%": "34.905",
        "reverse": "81.968"
    },
    "l": {
        "rand": "314.465",
        "25%": "198.976",
        "50%": "213.301",
        "75%": "202.811",
        "95%": "212.064",
        "99%": "206.376",
        "99,7%": "219.488",
        "reverse": "472.246"
    },
    "xl": {
        "rand": "705.105",
        "25%": "414.147",
        "50%": "446.867",
        "75%": "493.231",
        "95%": "452.925",
        "99%": "409.954",
        "99,7%": "460.117",
        "reverse": "1039.308"
    }
  }
}
