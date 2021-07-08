import React, { useRef } from 'react';

import './Dropdown.css';


const clickOutsideRef = (contentRef, toggleRef) => {
  document.addEventListener('mousedown', (e) => {
    // user click toggle
    if (toggleRef.current && toggleRef.current.contains(e.target)) {
      contentRef.current.classList.toggle('active')
    } else {
      // user click outside toggle and content
      if (contentRef.current && !contentRef.current.contains(e.target)) {
        contentRef.current.classList.remove('active')
      }
    }
  })
}


const Dropdown = ({ icon, badge, customToggle, contentData, renderItems, renderFooter }) => {
  const dropdownToggleEl = useRef(null);
  const dropdownContentEl = useRef(null);

  clickOutsideRef(dropdownContentEl, dropdownToggleEl);

  return (
    <div className="dropdown">
      <button ref={dropdownToggleEl} className="dropdown__toggle">
        {icon ? <i className={icon}></i> : ''}
        {badge ? <span className="dropdown__toggle-badge">{badge}</span> : ''}
        {customToggle ? customToggle() : ''}
      </button>
      <div ref={dropdownContentEl} className="dropdown__content">
        {contentData && renderItems ? contentData.map((item, index) => renderItems(item, index)) : ''}
        {renderFooter ? (<div className="dropdown__footer"> {renderFooter()} </div>) : ''}
      </div>
    </div>
  )
};

export default Dropdown;
