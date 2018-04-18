import React, { Component } from "react";
import { Line } from 'react-chartjs-2';
import Placeholder from './Placeholder';

function DataCharts(props) {
  if (props.stats)
    return (
      <div>
        <Line data = {{
          labels: [10,50,100,500,1000],
          datasets: [{
            label: props.title,
            borderColor: 'rgba(255,99,132,1)',
            data: props.stats['25%']
          }]}} width={200} height={200}/>
        {/* <Line />
        <Line />
        <Line />
        <Line />
        <Line />
        <Line />
        <Line /> */}
      </div>
    )
  else
    return <Placeholder />
}

export default DataCharts;
