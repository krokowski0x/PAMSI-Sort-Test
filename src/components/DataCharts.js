import React from "react";
import { Line, Bar } from 'react-chartjs-2';
import Placeholder from './Placeholder';
import ReactTooltip from 'react-tooltip';

function DataCharts(props) {
  let labels = [10,50,100,500,1000];
  const chartTypes = {
    'O(n)': labels,
    'O(log n)':  labels.map(x => Math.log10(x)),
    'O(nlog n)': labels.map(x => x*Math.log10(x)),
    'O(n^2)':    labels.map(x => x**2)
  };

  const opts = {
    maintainAspectRatio: false,
      scales: {
          yAxes: [{
              ticks: {
                // Max should be dynamically adjusted to the longest expected time
                max: props.stats ? props.stats['reverse']['xl'] : 5000,
                beginAtZero: true
              },
              scaleLabel: {
                  display: true,
                  fontColor: '#FFF',
                  fontSize: 16,
                  fontStyle: 'bold',
                  labelString: 'Time (miliseconds)'
              }
          }],
          xAxes: [{
              ticks: {
                // Skipping 10k arrays is better for chart clarity
                min: 50
              },
              scaleLabel: {
                  display: true,
                  fontColor: '#FFF',
                  fontSize: 16,
                  fontStyle: 'bold',
                  labelString: 'Array size (x1000)'
              }
          }]
      }
  };

  const legend = {
    display: true,
    padding: 15,
    position: 'top',
    labels: {
      fontColor: '#FFFFFF',
      fontSize: 16,
      fontStyle: 'bold'
    }
  };

  if (props.stats)
    return (
      <div data-tip data-for='chart' className='charts'>
        <Line data = {{
          labels,
          datasets: [{
            label: 'Best Case',
            borderWidth: 6,
            borderColor: 'rgba(99,255,132,1)',
            data: chartTypes[props.best],
            hidden: true
          },{
            label: 'Average Case',
            borderWidth: 6,
            borderColor: 'rgba(54, 162, 235, 1)',
            data: chartTypes[props.average],
            hidden: true
          },{
            label: 'Worst Case',
            borderWidth: 6,
            borderColor: 'rgba(255,99,132,1)',
            data: chartTypes[props.worst],
            hidden: true
          },{
            label: 'Random order',
            borderColor: '#DE369D',
            data: props.stats['rand']
          },{
            label: '25% sorted',
            borderColor: '#7DE2D1',
            data: props.stats['25%']
          },{
            label: '50% sorted',
            borderColor: '#EB6534',
            data: props.stats['50%']
          },
          {
            label: '75% sorted',
            borderColor: '#F3C98B ',
            data: props.stats['75%']
          },
          {
            label: '95% sorted',
            borderColor: '#C46D5E',
            data: props.stats['95%']
          },{
            label: '99% sorted',
            borderColor: '#BD1E1E',
            data: props.stats['99%']
          },{
            backgroundColor: 'rgba(0,0,0,0)',
            label: '99,7% sorted',
            borderColor: '#ECA400',
            data: props.stats['99,7%']
          },
          {
            label: 'Sorted in reverse order',
            borderColor: '#FFFFFF',
            data: props.stats['reverse']
          }
        ]}} options={opts} legend={legend} height={500}/>
        <ReactTooltip id="chart" offset={{left: 500}} place="top" type="light" effect="solid">
          Click on dataset to show it or hide it!
        </ReactTooltip>
      </div>
    )
  else
  // Render custom placeholder
    return (
      <div className='charts'>
        <Placeholder chart={true}/>
      </div>
    );
}

export default DataCharts;
