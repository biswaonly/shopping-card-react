import React, { Component } from 'react';

class UserInfo extends Component {
	render() {
		return (
			<div className="user_info">
				<a className="user_log_reg" href="/login">LOGIN / REGISTER</a>
				<div className="user_btn">
						<p>My Account</p>
						<span className="icon_down_arrow">
							<div className="icon_down_arrow_1">
								<div className="icon_down_arrow_2"></div>
							</div>
						</span>
				</div>
			</div>
		);
	}
}

export default UserInfo;