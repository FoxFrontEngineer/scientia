import React from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

function CaloriesChart(props) {
    return <LineChart width={1280} height={600} data={props.data} margin={{ bottom: 50, top: 50, right: 50, left: 50 }}>
    <Line type="monotone" dataKey="calories" stroke="#8884d8" />
    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
    <XAxis dataKey="name" />
    <YAxis dataKey="max" />
    <Tooltip />
  </LineChart>
}

export default CaloriesChart;