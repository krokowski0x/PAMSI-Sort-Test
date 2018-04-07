import React, { Component } from "react";
import Placeholder from './Placeholder';
import ArrayWorker from './../workers/arraysInit.worker.js';

class SortTest extends Component {
  constructor(props) {
    super(props);
    this.worker = new ArrayWorker();
    this.worker.onmessage = (m) => console.log(m);
    this.state = {
      type: props.match.params.sortType,
      arrays: [],
    };
  }

  componentDidMount() {
    this.worker.postMessage('Hello');
    //this.setState( {type: this.state.type, arrays} );
  }

  render() {
    return this.state.arrays.length ? (
      <div className='sort-tab'>
        <h2>{this.state.type}</h2>
      </div>
    ) : <Placeholder />
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
