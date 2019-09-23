import React from 'react';
import './style.css';

export default function index({color, text}) {
  return (
    <tbody>
      <tr className="border_bottom">
        <td className="first-column"><span className="table-logo mr-2">VW</span>Apple MAc Book 15" 250 SSD 12GB</td>
        <td>$73430</td>
        <td>1234567890</td>
        <td>12:30</td>
        <td className="row-inline">
          <span className={`text-${color} d-flex align-items-center status-circle`}><i className="fas fa-circle pl-2 pr-3"></i>{text}</span>
        </td>
        <td className="row-inline">
          <i className="fas fa-angle-down pr-5"></i>
        </td>
      </tr>
    </tbody>
  )
}
