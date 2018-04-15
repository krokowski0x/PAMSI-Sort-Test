import React, { Component } from "react";
import PromiseWorker from 'promise-worker';
import { Line } from 'react-chartjs-2';
import ArrayWorker from './../workers/arraysInit.worker.js';

const worker = new ArrayWorker();
const promiseWorker = new PromiseWorker(worker);

class SortTest extends Component {
  constructor(props) {
    super(props);
    this.worker = promiseWorker;
    this.state = {
      type: props.match.params.sortType
    };
  }

  componentDidMount() {
    // Short summary and title fetch
    fetch(`https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro=&explaintext=&origin=*&titles=${this.state.type}`)
    .then(res => res.json())
    .then(data => {
      let pageID = Object.keys(data.query.pages)[0];
      let info = data.query.pages[pageID];
      this.setState({title: info.title, description: info.extract, type: this.state.type});
    })
    .catch(err => console.log(err));

    // Independent Infobox fetch
    fetch(`https://en.wikipedia.org/w/api.php?action=query&prop=revisions&rvprop=content&format=json&titles=${this.state.type}&rvsection=0&origin=*`)
    .then(res => res.json())
    .then(data => {
      let pageID = Object.keys(data.query.pages)[0];
      let info = data.query.pages[pageID].revisions[0]['*'];

      let worst = info.match(/time\s*=\s*.*/g) || 'Unknown';
      let best = info.match(/best-time\s*=\s*.*/g) || 'Unknown';
      let average = info.match(/average-time\s*=\s*.*/g) || 'Unknown';

      // Had to break regex into few parts, becouse of inconsistent styling on Wikipedia
      if (worst !== 'Unknown')
        worst = 'O' + worst[0].match(/\(.*?\)/g)[0].replace(/\'\'s*/g,'');
      if (best !== 'Unknown')
        best = 'O' + best[0].match(/\(.*?\)/g)[0].replace(/\'\'s*/g,'');
      if (average !== 'Unknown') {
        // In Shellsort it was so badly formatted, that I had to have ths assertion
        if (this.state.type === 'Shellsort')
          average = 'Unknown';
        else
          average = 'O' + average[0].match(/\(.*?\)/g)[0].replace(/\'\'/g,'');
      }
       this.setState({average, best, worst})
    })
    .catch(err => console.log(err));
  }

  render() {
    let sizes = [10000,50000,100000,500000,1000000];
    let on = [10000,50000,100000,500000,1000000];
    let logn = [Math.log10(10000),Math.log10(50000),Math.log10(100000),Math.log10(500000),Math.log10(1000000)];
    let data = {
        labels: sizes,
        datasets: [
          {
          label: 'O(log n)',
          borderColor: 'rgba(255,99,132,1)',
          data: logn
        }, {
          label: 'O(n)',
          borderColor: 'rgba(54, 162, 235, 1)',
          data: on
        }]
    };
    let opts = {
        scales: {
            yAxes: [{
                type: 'linear',
                ticks: {
                    beginAtZero:true
                }
            }],
            xAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
    return (
      <div className='sort-description'>
        <section>
          <h2>{this.state.title}</h2>
          <p>{this.state.description}</p>
        </section>
        <div className='big-o'>
          <h2>O(n)</h2>
          <h4>Best case: {this.state.best}</h4>
          <h4>Average case: {this.state.average}</h4>
          <h4>Worst case: {this.state.worst}</h4>
        </div>
        <button>Sort!</button>
        <Line data={data} options={opts} />
      </div>
    );
  };
};

export default SortTest;
