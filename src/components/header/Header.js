import React, { Component } from 'react';
import ItemSearch from './ItemSearch';
import UserInfo from './UserInfo';
import './Header.css';

class Header extends Component {
	render() {
		return (
			<header className="header">
				<nav className="header_nav">
					<div className="header_logo">
						<h2>THE LOGO</h2>
					</div>
					<div className="space"></div>
					<ItemSearch />
					<UserInfo />
				</nav>
			</header>
		);
	}
}

export default Header;