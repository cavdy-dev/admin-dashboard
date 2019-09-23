import React from 'react';
import './style.css';

export default function index({title}) {
  return (
    <div className="chart-data">
      <div className="chart-data-title font-weight-bold pb-2">{title}</div>
      <div className="progress">
        <div className="progress-bar bg-success" role="progressbar" style={{width: '80%'}} aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
        <div className="progress-bar bg-warning" role="progressbar" style={{width: '20%'}} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
      <div className="chart-data-list pt-1">
        Pending {title}: <span className="text-warning font-weight-bold">20</span>
      </div>
      <div className="chart-data-list pt-1">
        Reconcilled {title}: <span className="text-success font-weight-bold">80</span>
      </div>
      <div className="chart-data-list pt-1 pb-5">
        Total {title}: <span className="text-primary font-weight-bold">100</span>
      </div>
    </div>
  )
}
