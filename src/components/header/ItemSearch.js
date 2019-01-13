import React, { Component } from 'react';

class ItemSearch extends Component{
  render(){
    return(
      <div className="header_search">
        <div className="header_search_space">
          <input className="header_search_input" type="text" placeholder="Search from Millions of Products"></input>
          <div className="space"></div>
          <div className="header_search_btn">
            <div className="search_icon">
                <div className="icon_black"></div>
            </div>
                <div className="icon_stick"></div>
          </div>
        </div>
      </div>
    )
  }
}

export default ItemSearch;