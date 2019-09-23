import React from 'react';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,
} from 'recharts';
import './style.css';

export default function index() {
  const data = [
    {name: 'Jan', uv: 1000, pv: 2400, amt: 2400,},
    {name: 'Feb', uv: 3000, pv: 1398, amt: 2210,},
    {name: 'Mar', uv: 2000, pv: 9800, amt: 2290,},
    {name: 'Apr', uv: 4000, pv: 3908, amt: 2000,},
    {name: 'May', uv: 3500, pv: 4800, amt: 2181,},
    {name: 'Jun', uv: 8000, pv: 5000, amt: 4881,},
  ];
  return (
    <div className="bar-chart-card p-3">
      <AreaChart
        width={600}
        height={280}
        data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
      </AreaChart>
    </div>
  )
}
