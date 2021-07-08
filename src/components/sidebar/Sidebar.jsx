import React from 'react';
import { Link } from 'react-router-dom';

import SidebarItem from './SidebarItem/SidebarItem';

import './Sidebar.css';
import logo from '../../assets/images/logo.svg';


const listSidebarItems = [
  { displayName: 'Dashboard', icon: 'bx bx-category-alt', route: '/' },
  { displayName: 'Customers', icon: 'bx bx-user-pin', route: '/customers' },
  { displayName: 'Products', icon: 'bx bx-package', route: '/products' },
  { displayName: 'Orders', icon: 'bx bx-cart', route: '/orders' },
  { displayName: 'Analytics', icon: 'bx bx-bar-chart-alt', route: '/analytics' },
  { displayName: 'categories', icon: 'bx bx-list-ol', route: '/categories' },
  { displayName: 'discounts', icon: 'bx bx-gift', route: '/discounts' },
  { displayName: 'inventories', icon: 'bx bx-store-alt', route: '/inventories' },
  { displayName: 'settings', icon: 'bx bx-cog', route: '/settings' }
];

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
              title={item.displayName} />
          </Link>
        ))
      }
    </div >
  );
};


export default Sidebar;
