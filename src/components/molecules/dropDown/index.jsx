import React from 'react';
import './style.css';

export default function index() {
  return (
    <form>
      <div className="form-group d-flex flex-row align-items-center">
        <label className="pr-3">Show</label>
        <select className="form-control">
          <option>All</option>
          <option>Reconcilled</option>
          <option>Un-reconcilled</option>
          <option>Settled</option>
          <option>Unsettled</option>
        </select>
      </div>
    </form>
  )
}
