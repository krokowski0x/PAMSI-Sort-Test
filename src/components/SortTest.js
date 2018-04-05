import React, { Component } from "react";

class SortTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: props.match.params.sortType,
      arrays: []
    };
  }

  componentDidMount() {
    let xs = { len: 10000 };
    let s = { len: 50000 };
    let m = { len: 100000 };
    let l = { len: 500000 };
    let xl = { len: 1000000 };
    let arrays = { xs, s, m, l, xl };
    arrays = setup(arrays);
    this.setState( {type: this.state.type, arrays} );
    // const cachedArrays = localStorage.getItem('arrays');
    // if (cachedArrays)
    //   this.setState({ type: this.state.type, arrays: JSON.parse(cachedArrays) });
    // else
    //   fetch('/arrays')
    //     .then(res => res.json())
    //     .then(result => this.onSetResult(result, 'arrays'));
  }

  // onSetResult(result, key) {
  //   localStorage.setItem(key, JSON.stringify(result.arrays));
  //   this.setState({ type: this.state.type, arrays: result.arrays });
  // }

  render() {
    return (
      <div className='sort-tab'>
        <h2>{this.state.type}</h2>
        <p></p>
      </div>
    );
  };
};

export default SortTest;

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
