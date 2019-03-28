import React, { Component } from 'react';
import { connect} from 'react-redux';
import Button from './Button';

class ButtonSequel extends Component {
  render() {
    return (
      <div className="button_left col-md-2">
        <div className="button_sequel">
          <div className="ggg">
            {this.props.sizes.map((item, index)=>{
              return <Button key={index} item={item} />
            })}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    sizes : state.sizes,
    new_size : state.new_size
  }
}

export default connect(mapStateToProps)(ButtonSequel);