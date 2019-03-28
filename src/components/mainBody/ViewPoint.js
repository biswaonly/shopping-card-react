import React, { Component } from 'react';
import { connect} from 'react-redux';

class ViewPoint extends Component {
  render() {
    return (
      <div className="view_point">
        <div className="view_point_item_count">
          <p>{this.props.card_data.length} Product(s) found.</p>
        </div>
        <div className="space"></div>
        <div className="view_point_order">
          <p>Order by</p>
          <select onChange={(e)=>this.props.optionChange(e.target.value)}>
            <option value="PoP">Popular</option>
            <option value="L2H">Low to High</option>
            <option value="H2L">High to Low</option>
          </select>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    ...state
  }
}

function mapDispatchToProps(dispatch){
  return{
    optionChange: (i)=>{
      const action = { type: 'OPTION_CHANGE', pass : i};
      dispatch(action);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewPoint);