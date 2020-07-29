import React from 'react';
import MenuItem from './MenuItem';
import userProfile from "../assets/images/dummy-avatar.jpg";
function BarraUser(){
    return(
		// topbar
        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
				<button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
					<i className="fa fa-bars"></i>
				</button>

				<ul className="navbar-nav ml-auto">
                    <MenuItem name="3+" icon="fas fa-bell fa-fw" active="dropdown no-arrow mx-1" collapse="dropdown-toggle" type="notification"/>
                    <MenuItem name="7" icon="fas fa-envelope fa-fw" active="dropdown no-arrow mx-1" collapse="dropdown-toggle" type="notification"/>

					<div className="topbar-divider d-none d-sm-block"></div>
					<li className="nav-item dropdown no-arrow">
						<a className="nav-link dropdown-toggle" href="/" id="userDropdown">
							<span className="mr-2 d-none d-lg-inline text-gray-600 small">Walter White</span>
							<img className="img-profile rounded-circle" src={userProfile} width="60"/>
						</a>
					</li>
				</ul>
			</nav>
    )
}

export default BarraUser;