import React, { Component } from 'react';
import { connect} from 'react-redux';
import ViewPoint from './ViewPoint';

class SingleItem extends Component {
  addToCart=(i)=>{
    this.props.addToCart(i);
    this.props.changeItemQuantity();
  }
  render() {
    return (
      <div className="card_sequel col-md-10">
        <ViewPoint/>
        <div className="">
          {this.props.card_data.map((item)=>{
            return (
              <div className="card col-lg-3 col-md-4 col-sm-6" key={item.id} >
                {(item.available === false)?
                  <div className="cccc">
                    <h3>This Item Is Sold</h3>
                    </div>
                    :null
                }
                <div className={(item.available === false)?"pppp":"PPPP"} onClick={()=>this.addToCart(item)}>
                  <img src={require(`../../static/products/${item.sku}_1.jpg`)} className="card_img" alt={item.style}></img>
                  <div className="card_info">
                    <p className="card_text">{item.title}</p>
                    <p className="card_price">$ {item.price}</p>
                    <button className= "card_btn">Add to Cart</button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return{
    ...state
  }
}

function mapDispatchToProps(dispatch){
  return{
    addToCart: (i)=>{
      const action = { type: 'ADD_TO_CART', pass : i};
      dispatch(action);
    },
    changeItemQuantity : ()=>{
      const action = { type: 'CHANGE_ITEM_QUANTITY'};
      dispatch(action);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleItem);