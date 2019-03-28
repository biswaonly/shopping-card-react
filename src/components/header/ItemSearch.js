import React, { Component } from 'react';
import { connect} from 'react-redux';
import SearchDiv from './SearchDiv';

class ItemSearch extends Component{
  render(){
    return(
      <div className="header_search">
        <div className="header_search_space">
          <input className="header_search_input" onChange={this.props.handleChange} type="text" placeholder="Search from Millions of Products"></input>
          <div className="space"></div>
          <div className="header_search_btn">
            <div className="search_icon">
                <div className="icon_black"></div>
            </div>
                <div className="icon_stick"></div>
          </div>
        </div>
					<SearchDiv />
      </div>
    )
  }
}

function mapStateToProps(state){
  return{
    ...state
  }
}

function mapDispatchToProps(dispatch) {
  return{
    handleChange: (event)=>{
    const action = { type: 'INPUT_CHANGE', pass : event.target.value};
    dispatch(action);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemSearch);