import React from 'react';
import './style.css';
import DropDown from '../../molecules/dropDown';
import Search from '../../molecules/paymentSearch';
import Table from '../../molecules/tables';
import Paginate from '../../molecules/paginate';

export default function index() {
  return (
    <div className="d-flex flex-column pt-4 pr-4">
      <div className="payment-title">Payments</div>
      <div className="payment-tab d-flex flex-row align-items-center">
        <p>Showing 20 out of 500 payments</p>
        <Search />
        <DropDown />
      </div>
      <table className="table table-light table-hover mr-4 mt-4">
        <thead className="table-head">
          <tr className="border_bottom">
            <td>Item Type</td>
            <td>Price</td>
            <td>Transaction No</td>
            <td>Time</td>
            <td>Status</td>
            <td></td>
          </tr>
        </thead>
        <Table color="success" text="Reconcilled" />
        <Table color="warning" text="Pending" />
        <Table color="success" text="Reconcilled" />
        <Table color="success" text="Reconcilled" />
        <Table color="warning" text="Pending" />
        <Table color="secondary" text="Un-reconcilled" />
        <Table color="success" text="Reconcilled" />
        <Table color="success" text="Reconcilled" />
        <Table color="secondary" text="Un-reconcilled" />
        <Table color="warning" text="Pending" />
      </table>
      <div className="d-flex flex-row align-items-center justify-content-between mt-4 mb-4">
        <p>Showing 1 to 10 of 500 entries</p>
        <Paginate />
      </div>
    </div>
  )
}