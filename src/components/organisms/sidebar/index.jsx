import React from 'react';
import './style.css';
import GenerateInvoiceButton from '../../molecules/generateButton';
import SidebarLink from '../../molecules/sidebarLink';

export default function index() {
  return (
    <div className="sidebar d-flex flex-column">
      <GenerateInvoiceButton />
      <SidebarLink />
    </div>
  )
}
