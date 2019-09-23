import React from 'react';
import Header from '../organisms/header';
import Sidebar from '../organisms/sidebar';
import TopCharts from '../organisms/topCharts';
import MainCharts from '../organisms/mainCharts';
import Payments from '../organisms/paymentList';

export default function index() {
  return (
    <div>
      <Header />
      <Sidebar />
      <div className="main-section d-flex flex-column">
        <TopCharts />
        <MainCharts />
        <Payments />
      </div>
    </div>
  )
}
