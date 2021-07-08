import React from 'react';
import { Link } from 'react-router-dom';

import './Sidebar.css';
import logo from '../../assets/images/logo.svg';

import listSidebarItems from '../../assets/JsonData/sidebar_routes.json';


const SidebarItem = ({ isActive, icon, title }) => {
  return (
    <div className="sidebar__item">
      <div className={`sidebar__item-inner ${isActive ? 'active' : ''}`}>
        <i className={icon}></i>
        <span>{title}</span>
      </div>
    </div>
  )
}


const Sidebar = ({ location }) => {
  return (
    <div className="sidebar">
      <div className="sidebar__logo">
        <img src={logo} alt="logo" />
      </div>
      {
        listSidebarItems.map((item, index) => (
          <Link to={item.route} key={index}>
            <SidebarItem
              isActive={item.route === location.pathname}
              icon={item.icon}
              title={item.display_name} />
          </Link>
        ))
      }
    </div >
  );
}

export default Sidebar;
