import React from 'react';
import './style.css';
import BarChart from '../../molecules/chart/bar';
import ChartData from '../../molecules/chartData';

export default function index() {
  return (
    <div className="d-flex flex-row pt-4 mr-4">
      <BarChart />
      <div className="chart-data-wrapper flex-grow-1 ml-3 p-4">
        <ChartData title="Orders" />
        <ChartData title="Payments" />
      </div>
    </div>
  )
}
