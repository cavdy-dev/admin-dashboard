import React from 'react';
import './style.css';
import Input from '../../atoms/input';

export default function index() {
  return (
    <div className="d-flex flex-row align-items-center ml-5">
      <i className="fas fa-search mr-3"></i>
      <Input inputStyle="header-search" value="Search..." />
    </div>
  )
}
