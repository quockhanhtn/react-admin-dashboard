import React from 'react';
import { Link } from 'react-router-dom';

import Dropdown from '../Dropdown/Dropdown';
import ThemeMenu from '../ThemeMenu/ThemeMenu';

import userAvatar from '../../assets/images/avatar.jpg';
import notificationItems from '../../assets/JsonData/notification.json';
import userMenuItems from '../../assets/JsonData/user_menus.json';

import './TopNav.css';

const currentUser = {
  displayName: 'KhanhLam',
  image: userAvatar
}

const renderNotificationItem = (item, index) => (
  <div className="notification-item" key={index}>
    <i className={item.icon}></i>
    <span>{item.content}</span>
  </div>
)

const renderUserToggle = (user) => (
  <div className="topnav__right-user">
    <div className="topnav__right-user__image"><img src={currentUser.image} alt="" /></div>
    <div className="topnav__right-user__name">{currentUser.displayName}</div>
  </div>
)

const renderUserMenu = (item, index) => (
  <Link to='/' key={index}>
    <div className="notification-item">
      <i className={item.icon}></i>
      <span>{item.content}</span>
    </div>
  </Link>
)

const TopNav = () => {
  return (
    <div className='topnav'>
      <div className="topnav__search">
        <input type="text" placeholder='Search here...' />
        <i className='bx bx-search'></i>
      </div>
      <div className="topnav__right">
        <div className="topnav__right-item">
          <Dropdown
            customToggle={() => renderUserToggle(currentUser)}
            contentData={userMenuItems}
            renderItems={(item, index) => renderUserMenu(item, index)} />
        </div>
        <div className="topnav__right-item">
          <Dropdown
            icon='bx bx-bell'
            badge='12'
            contentData={notificationItems}
            renderItems={(item, index) => renderNotificationItem(item, index)}
            renderFooter={() => <Link to='/'>View all</Link>} />
        </div>
        <div className="topnav__right-item">
          <ThemeMenu />
        </div>
      </div>
    </div>
  )
}

export default TopNav;