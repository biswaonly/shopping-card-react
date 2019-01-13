import React, { Component } from 'react';
import { connect} from 'react-redux';

class RoundButton extends Component {
  render() {
    return (
      <div className="button_left">
        <div className="button_sequel">
          {this.props.sizes.map((item, index)=>{
            return <button className="round_button">{item}</button>
          })}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    sizes : state.sizes
  }
}

export default connect(mapStateToProps)(RoundButton);