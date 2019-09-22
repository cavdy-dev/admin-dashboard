import React from 'react';
import './style.css';
import Link from '../../atoms/link';

export default function index() {
  return (
    <div className="d-flex flex-column sidebar-link">
      <span className="sidebar-link-title pt-3">Main</span>
      <div className="sidebar-link-item sidebar-active d-flex align-items-center">
        <Link icon="fas fa-tachometer-alt fa-lg pr-2" name="Overview" linkStyle="sidebar-link-nav" />
      </div>
      <span className="sidebar-link-title pt-3">Payments</span>
      <div className="sidebar-link-item d-flex align-items-center">
        <Link icon="fas fa-wallet fa-lg pr-2" name="All Payments" linkStyle="sidebar-link-nav" />
      </div>
      <div className="sidebar-link-item d-flex align-items-center">
        <Link icon="fas fa-wallet fa-lg pr-2" name="Reconcilled Payments" linkStyle="sidebar-link-nav" />
      </div>
      <div className="sidebar-link-item d-flex align-items-center">
        <Link icon="fas fa-wallet fa-lg pr-2" name="Un - Reconcilled Payments" linkStyle="sidebar-link-nav" />
      </div>
      <div className="sidebar-link-item d-flex align-items-center">
        <Link icon="fas fa-record-vinyl fa-lg pr-2" name="Manual Settlement" linkStyle="sidebar-link-nav" />
      </div>
      <span className="sidebar-link-title pt-3">Orders</span>
      <div className="sidebar-link-item d-flex align-items-center">
        <Link icon="far fa-list-alt fa-lg pr-2" name="All Orders" linkStyle="sidebar-link-nav" />
      </div>
      <div className="sidebar-link-item d-flex align-items-center">
        <Link icon="far fa-list-alt fa-lg pr-2" name="Pending Orders" linkStyle="sidebar-link-nav" />
      </div>
      <div className="sidebar-link-item d-flex align-items-center">
        <Link icon="far fa-list-alt fa-lg pr-2" name="Reconcilled Orders" linkStyle="sidebar-link-nav" />
      </div>
      <div className="sidebar-link-item d-flex align-items-center pt-3">
        <Link icon="far fa-user fa-lg pr-2" name="Merchant Profile" linkStyle="sidebar-link-nav" />
      </div>
    </div>
  )
}
