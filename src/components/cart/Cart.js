import React, { Component } from 'react';
import './cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart,faWindowClose } from '@fortawesome/free-solid-svg-icons'
import { connect} from 'react-redux';
import CartCard from './CartCard';

class Cart extends Component {
  render() {
    return (
      <div className="cart" style={(this.props.show_cart)?{transition: "ease-in-out .2s"}:{right: "-400px",transition: "ease-in-out .3s"}}>
        <div className="card_logo" onClick={this.props.showCart}>
          <FontAwesomeIcon className="cart_icon" style={(this.props.show_cart)?{display: "none"}:{display: "block"}} icon={faShoppingCart} />
          <FontAwesomeIcon className="cart_icon" style={(this.props.show_cart)?{display: "block"}:{display: "none"}} icon={faWindowClose} />
          <div className="pp" style={(this.props.show_cart)?{display: "none"}:{display: "block"}}>{this.props.cart_count}</div>
        </div>
        
        <div className="cart_area" >
          <div className="cart_area_card">
            <div className="cart_area_header">
              <div className="cart_area_header_logo" onClick={this.props.showCart}>
                <FontAwesomeIcon className="cart_area_header_icon"  icon={faShoppingCart} />
                 <p className="ppp">{this.props.cart_count}</p>
              </div>
            </div>
            <div className={(this.props.cart_count === 0)?"bbb":"bBb"}>
              <p>Add Some Products in Cart <br></br> :)</p>
            </div>
            {this.props.count_cart_data.map((item)=>{
              return(
                <CartCard  item={ item } key={item.id}/>
              )
            })}
          </div>

          <div className="cart_area_footer">
            <div className="total_value">
              <h4>SUBTOTAL</h4>
              <div className="space"></div>
              <h3>$ {this.props.total_price.toFixed(2)}</h3>
            </div>
            <div className="checkout_btn">CHECKOUT</div>
          </div>
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
      showCart: ()=>{
      const action = { type: 'SHOW_CART'};
      dispatch(action);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);