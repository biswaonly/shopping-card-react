import React, { Component } from 'react';
import { connect} from 'react-redux';

class Button extends Component {
  state={
      isSelected : false
  }

  onClickButton(item) {
    this.setState({
      isSelected: !this.state.isSelected
    }, ()=>{
      this.props.btnOnClick(item)
    })
  }
  render() {
    return (
      <button className={`round_button ${this.state.isSelected ? "round_button_active": ""}`} onClick={()=>this.onClickButton(this.props.item)}>{this.props.item}</button>
    );
  }
}

function mapStateToProps(state){
  return{
    ...state
  }
}

function mapDispatchToProps(dispatch) {
  return{
      btnOnClick: (item)=>{
      const action = { type: 'ROUND_BUTTON_CLICKED', pass : item};
      dispatch(action);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Button);