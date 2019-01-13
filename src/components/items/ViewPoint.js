import React, { Component } from 'react';

class ViewPoint extends Component {
  render() {
    return (
      <div className="view_point">
        <div className="view_point_item_count">
          <p> Product(s) found.</p>
        </div>
        <div className="space"></div>
        <div className="view_point_order">
          <p>Order by</p>
          <select>
            <option>Popular</option>
            <option>Low to High</option>
            <option>High to Low</option>
          </select>
        </div>
      </div>
    );
  }
}

export default ViewPoint;