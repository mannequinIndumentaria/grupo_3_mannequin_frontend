import React from 'react';
import MenuItem from './MenuItem';
function Menu(){
    return(
	<ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
		<a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
			<div className="sidebar-brand-icon">
				<i className="fas fa-chart-line"></i>
			</div>
			<div className="sidebar-brand-text mx-3">Admin</div>
		</a>
		<hr className="sidebar-divider my-0"/>
        <MenuItem active="active" name="Dashboard" icon="fas fa-fw fa-tachometer-alt" />
		<hr className="sidebar-divider"/>
		<div className="sidebar-heading">Actions</div>
            <MenuItem active="" name="Pages" collapsed="collapsed" icon="fas fa-fw fa-folder" />
            <MenuItem active="" name="Charts" collapsed="" icon="fas fa-fw fa-chart-area" />
            <MenuItem active="" name="Tables" collapsed="collapsed" icon="fas fa-fw fa-table" />
		<hr className="sidebar-divider d-none d-md-block"/>
	</ul>

    )
}

export default Menu;