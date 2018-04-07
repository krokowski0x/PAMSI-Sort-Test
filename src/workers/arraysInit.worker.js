self.onmessage = (msg) => {
  self.postMessage('Hi, Im array worker!');
};

// let xs = { len: 10000 };
// let s = { len: 50000 };
// let m = { len: 100000 };
// let l = { len: 500000 };
// let xl = { len: 1000000 };
// let arrays = { xs, s, m, l, xl };
// arrays = setup(arrays);
