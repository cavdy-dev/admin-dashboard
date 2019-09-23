import React from 'react';
import Header from '../organisms/header';
import Sidebar from '../organisms/sidebar';
import TopCharts from '../organisms/topCharts';

export default function index() {
  return (
    <div>
      <Header />
      <Sidebar />
      <div className="main-section">
        <TopCharts />
      </div>
    </div>
  )
}
