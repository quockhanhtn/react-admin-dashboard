import React from 'react';
import './SidebarItem.css';

const SidebarItem = ({ isActive, icon, title }) => {
  return (
    <div className="sidebar__item">
      <div className={`sidebar__item-inner ${isActive ? 'active' : ''}`}>
        <i className={icon}></i>
        <span>{title}</span>
      </div>
    </div>
  )
};

export default SidebarItem;
