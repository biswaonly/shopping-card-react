import React, { Component } from 'react';
import { connect} from 'react-redux';
import ViewPoint from './ViewPoint';

class SingleItem extends Component {
  render() {
    return (
      <div className="card_sequel">
        <ViewPoint />
        {this.props.data.map((item,index)=>{
          return (
          <div className="card">
            <img src={require(`../../static/products/${item.sku}_1.jpg`)} className="card_img"></img>
            <div className="card_info">
              <p className="card_text">{item.title}</p>
              <p className="card_price">$ {item.price}</p>
              <button className= "card_btn">Add to Cart</button>
            </div>
          </div>)
        })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return{
    data: state.data
  }
}

export default connect(mapStateToProps)(SingleItem);