import React, { Component } from 'react';
import './cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { connect} from 'react-redux';

class CartCard extends Component {
	state={
			mouseOver : false,
			deleteCard : false
	}
	changeMouseOverEvent=()=>{
		this.setState({
			mouseOver : true
		})
	}
	changeMouseOutEvent=()=>{
		this.setState({
			mouseOver : false
		})
	}
	removeCart=(i)=>{
		this.setState({
			deleteCard : true
		});
		setTimeout(() => {
			this.props.changeItemQuantity(i);
			this.props.removeCartItem(i);
		}, 500);
	}

  render() {
    return (
			<div className={(this.state.deleteCard)?"cart_card cc":"cart_card"} >
				<img src={require(`../../static/products/${this.props.item.sku}_2.jpg`)} className="cart_card_img" alt={this.props.item.style}></img>
				<div className="cart_card_info">
					<h4 className={(this.state.mouseOver)?"line_thro":""}>{this.props.item.title} </h4>
					<p className={(this.state.mouseOver)?"line_thro":""}>{this.props.item.availableSizes[0]} | {this.props.item.style}</p>
					<p className={(this.state.mouseOver)?"line_thro":""}>Quantity {this.props.item.cartQuantity}</p>
				</div>
				<div className="space"></div>
				<div className="cart_card_price">
					<div className="close_icon">
						<FontAwesomeIcon className="close_icon_fa" onMouseOut={this.changeMouseOutEvent} onMouseOver={this.changeMouseOverEvent} onClick={()=>this.removeCart(this.props.item)} icon={faTimes} />
					</div>
					<div className="space"></div>
					<h3 className={(this.state.mouseOver)?"line_thro":""}>$ {this.props.item.price.toFixed(2)}</h3>
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
		removeCartItem: (i)=>{
    	const action = { type: 'REMOVE_CART_ITEM', pass : i};
    	dispatch(action);
		},
		changeItemQuantity: (i)=>{
			const action = { type: 'CHANGE_ITEM_QUANTITY', pass : i};
			dispatch(action);
		}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartCard);