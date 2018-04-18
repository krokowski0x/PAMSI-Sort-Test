import React, { Component } from "react";
import { Line } from 'react-chartjs-2';
import Placeholder from './Placeholder';

function DataCharts(props) {
  let labels = [10,50,100,500,1000];
  const chartTypes = {
    'O(n)': labels,
    'O(log n)': labels.map(x => Math.log10(x)),
    'O(nlog n)': labels.map(x => x*Math.log10(x)),
    'O(n^2)': labels.map(x => x**2)
  }

  const opts = {
    maintainAspectRatio: false,
      scales: {
          yAxes: [{
              ticks: {
                max: 5000,
                beginAtZero: true
              }
          }],
          xAxes: [{
              ticks: {
                  beginAtZero: true
              }
          }]
      }
  }

  const legend = {
    display: true,
    padding: 15,
    position: 'top',
    labels: {
      fontColor: '#FFFFFF',
      fontSize: 16,
      fontStyle: 'bold'
    }
  }

  if (props.stats)
    return (
      <div className='charts'>
        <Line data = {{
          labels,
          datasets: [{
            label: 'Best Case',
            borderWidth: 6,
            borderColor: 'rgba(99,255,132,1)',
            data: chartTypes[props.best]
          },{
            label: 'Average Case',
            borderWidth: 6,
            borderColor: 'rgba(54, 162, 235, 1)',
            data: chartTypes[props.average]
          },{
            label: 'Worst Case',
            borderWidth: 6,
            borderColor: 'rgba(255,99,132,1)',
            data: chartTypes[props.worst]
          },{
            label: 'Random order',
            borderColor: '#E07BE0',
            data: props.stats['rand']
          },{
            label: '25% sorted',
            borderColor: '#381D2A',
            data: props.stats['25%']
          },{
            label: '50% sorted',
            borderColor: '#FFE900',
            data: props.stats['50%']
          },
          {
            label: '75% sorted',
            borderColor: '#E9E3B4 ',
            data: props.stats['75%']
          },
          {
            label: '95% sorted',
            borderColor: '#001D4A',
            data: props.stats['95%']
          },{
            label: '99% sorted',
            borderColor: '#EF271B',
            data: props.stats['99%']
          },{
            backgroundColor: 'rgba(0,0,0,0)',
            label: '99,7% sorted',
            borderColor: '#ECA400',
            data: props.stats['99,7%']
          },
          {
            label: 'Sorted in reverse order',
            borderColor: '#EFF1ED',
            data: props.stats['reverse']
          }
        ]}} options={opts} legend={legend} height={500}/>
      </div>
    )
  else
    return (
      <div className='charts'>
        <Placeholder chart={true}/>
      </div>
    );
}

export default DataCharts;
