import React from 'react';
import './style.css';

export default function index() {
  return (
    <div className="d-flex flex-row align-items-center ml-4">
      <div className="profile-message mr-2">
        <div className="hello">Hello</div>
        <div className="profile-name">Isaiah Franklin</div>
      </div>
      <img src="https://res.cloudinary.com/cavdy/image/upload/v1566925735/js2_pfak7d.png" alt="img" className="profile-img"/>
    </div>
  )
}
