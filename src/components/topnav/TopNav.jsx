import React from 'react';
import { Link } from 'react-router-dom';

import Dropdown from '../Dropdown/Dropdown';
import ThemeMenu from '../ThemeMenu/ThemeMenu';

import userAvatar from '../../assets/images/avatar.jpg';
import './TopNav.css';

const currentUser = { displayName: 'KhanhLam', image: userAvatar };
const userMenuItems = [
  { icon: 'bx bx-user', content: 'Profile' },
  { icon: 'bx bx-wallet-alt', content: 'My Wallet' },
  { icon: 'bx bx-cog', content: 'Settings' },
  { icon: 'bx bx-log-out-circle bx-rotate-180', content: 'Logout' }
];
const notificationItems = [
  { icon: 'bx bx-error', content: 'Lorem ipsum dolor sit amet consectetur adipisicing.' },
  { icon: 'bx bx-package', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, in?' },
  { icon: 'bx bx-cart', content: 'Sit amet consectetur adipisicing elit. Doloribus quasi autem laboriosam?' },
  { icon: 'bx bx-error', content: 'Lorem ipsum dolor sit amet.' },
  { icon: 'bx bx-cart', content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.' }
];


const renderNotificationItem = (item, index) => (
  <div className="notification-item" key={index}>
    <i className={item.icon}></i>
    <span>{item.content}</span>
  </div>
);

const renderUserToggle = (user) => (
  <div className="topnav__right-user">
    <div className="topnav__right-user__image"><img src={currentUser.image} alt="" /></div>
    <div className="topnav__right-user__name">{currentUser.displayName}</div>
  </div>
);

const renderUserMenu = (item, index) => (
  <Link to='/' key={index}>
    <div className="notification-item">
      <i className={item.icon}></i>
      <span>{item.content}</span>
    </div>
  </Link>
);

const TopNav = () => {
  return (
    <div className='topnav'>
      {/* Search bar */}
      <div className="topnav__search">
        <input type="text" placeholder='Search here...' />
        <i className='bx bx-search'></i>
      </div>
      {/* Right of Top navigation */}
      <div className="topnav__right">
        {/* User menu */}
        <div className="topnav__right-item">
          <Dropdown
            customToggle={() => renderUserToggle(currentUser)}
            contentData={userMenuItems}
            renderItems={(item, index) => renderUserMenu(item, index)} />
        </div>
        {/* Notification */}
        <div className="topnav__right-item">
          <Dropdown icon='bx bx-bell' badge='12' contentData={notificationItems}
            renderItems={(item, index) => renderNotificationItem(item, index)}
            renderFooter={() => <Link to='/'>View all</Link>} />
        </div>
        {/* Theme menu */}
        <div className="topnav__right-item"><ThemeMenu /></div>
      </div>
    </div>
  )
}

export default TopNav;