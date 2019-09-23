import React from 'react';
import LineChart from '../../molecules/chart/line';

export default function index() {
  return (
    <div className="d-flex flex-row">
      <LineChart name="Daily Transaction Volume" price="4,342" />
      <LineChart name="Daily Transaction Value" price="#4,000,000" />
      <LineChart name="Total Transaction Volume" price="452,000" />
      <LineChart name="Total Transaction Value" price="#4,000,000" />
    </div>
  )
}
