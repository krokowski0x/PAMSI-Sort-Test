import React from "react";
import { Line } from 'react-chartjs-2';
import ReactTooltip from 'react-tooltip';

const ChartTooltip = (props) => {

  // Array of 100 in-order intigers
  const sizes = [...Array(100).keys()];
  const chartTypes = {
    'O(n)': sizes,
    'O(log n)':  sizes.map(x => Math.log10(x)),
    'O(nlog n)': sizes.map(x => x*Math.log10(x)),
    'O(n^2)':    sizes.map(x => x**2)
  }
  const data = {
      labels: sizes,
      datasets: [{
        label: props.type,
        borderColor: 'rgba(255,99,132,1)',
        data: chartTypes[props.type]
      }]
  };
  const opts = {
    maintainAspectRatio: false,
    tooltips: {
      enabled: false
    },
      scales: {
          yAxes: [{
              ticks: {
                  beginAtZero: true,
                  display: false
              }
          }],
          xAxes: [{
              ticks: {
                  beginAtZero: true,
                  display: false
              }
          }]
      }
  }
  return (
    <ReactTooltip id={props.id} place="left" effect="float">
     <Line data={data}
           options={opts}
           width={200}
           height={200}
      />
    </ReactTooltip>
  );
}

export default ChartTooltip;
