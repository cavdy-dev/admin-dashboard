import React from 'react';
import './style.css';
import Search from '../../molecules/headerSearch';
import Link from '../../molecules/headerLink';
import Notification from '../../molecules/notification';
import Profile from '../../molecules/profile';

export default function() {
  return (
    <div className="header d-flex justify-content-between align-items-center pl-5 pr-2">
      <div className="header-left d-flex flex-row">
        <div className="header-logo font-weight-bold mr-5">
          TransMonitor
        </div>
        <Search />
      </div>
      <div className="header-right d-flex flex-row align-items-center">
        <Link />
        <Notification />
        <Profile />
      </div>
    </div>
  )
}
