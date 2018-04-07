self.onmessage = (msg) => {
  let xs = { len: 10000 };
  let s = { len: 50000 };
  let m = { len: 100000 };
  let l = { len: 500000 };
  let xl = { len: 1000000 };
  let arrays = { xs, s, m, l, xl };
  arrays = setup(arrays);
  self.postMessage(arrays);
};

const setup = (arrays) => {
  for (let array in arrays) {
    arrays[array]['rand'] = Array.from({length: arrays[array]['len']}, () => Math.floor(Math.random() * arrays[array]['len']));

    let a = arrays[array]['rand'];
    arrays[array]['reverse'] = a.concat().sort((a,b) => b-a);
    arrays[array]['25%'] = [...a.concat().sort((a,b) => a-b).slice(0, arrays[array]['len']*0.25), ...a.concat().slice(0, arrays[array]['len']*0.75)];
    arrays[array]['50%'] = [...a.concat().sort((a,b) => a-b).slice(0, arrays[array]['len']*0.5), ...a.concat().slice(0, arrays[array]['len']*0.5)];
    arrays[array]['75%'] = [...a.concat().sort((a,b) => a-b).slice(0, arrays[array]['len']*0.75), ...a.concat().slice(0, arrays[array]['len']*0.25)];
    arrays[array]['95%'] = [...a.concat().sort((a,b) => a-b).slice(0, arrays[array]['len']*0.95), ...a.concat().slice(0, arrays[array]['len']*0.05)];
    arrays[array]['99%'] = [...a.concat().sort((a,b) => a-b).slice(0, arrays[array]['len']*0.99), ...a.concat().slice(0, arrays[array]['len']*0.01)];
    arrays[array]['99,7%'] = [...a.concat().sort((a,b) => a-b).slice(0, arrays[array]['len']*0.997), ...a.concat().slice(0, arrays[array]['len']*0.003)];
  }
  return arrays;
}
