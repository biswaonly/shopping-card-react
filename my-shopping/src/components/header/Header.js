import React, { Component } from 'react';
import './Header.css';
import ItemSearch from './ItemSearch';

class Header extends Component {
  render() {
    return (
      <header className="header">
          <nav className="header_nav">
          
              <div className="header_logo">THE LOGO</div>

              <ItemSearch />

            
              <div className="space"></div>

              <div className="user_info">
                  <a className="user_log_reg" href="/login">LOGIN / REGISTER</a>
                  <div className="user_btn">
                    <p>My Account</p>
                    <span className="icon_down_arrow">
                        <div className="icon_down_arrow_1">
                            <div className="icon_down_arrow_2"></div>
                        </div>
                    </span>
                  <div className="user_content">
                      <a>Order</a>
                      <a>Wish List</a>
                      <a>Wallet</a>
                      <a>Tips</a>
                      <a>Track Order</a>
                  </div>
                  </div>
              </div>
          </nav>
      </header>
    );
  }
}

export default Header;