import React, { useRef, useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';

import ThemeAction from '../../redux/actions/ThemeActions';

import './ThemeMenu.css';

const modeSettings = [
  { id: 'light', name: 'Light', background: 'light-background', class: 'theme-mode-light' },
  { id: 'dark', name: 'Dark', background: 'dark-background', class: 'theme-mode-dark' }
];
const colorSettings = [
  { id: 'blue', name: 'Blue', background: 'blue-color', class: 'theme-color-blue' },
  { id: 'red', name: 'Red', background: 'red-color', class: 'theme-color-red' },
  { id: 'cyan', name: 'Cyan', background: 'cyan-color', class: 'theme-color-cyan' },
  { id: 'green', name: 'Green', background: 'green-color', class: 'theme-color-green' },
  { id: 'orange', name: 'Orange', background: 'orange-color', class: 'theme-color-orange' },
];

function clickOutsideRef(contentRef, toggleRef) {
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

const ThemeMenu = () => {
  const menuRef = useRef(null);
  const menuToggleRef = useRef(null);

  clickOutsideRef(menuRef, menuToggleRef);

  const [currentMode, setCurrentMode] = useState('light');
  const [currentColor, setCurrentColor] = useState('blue');

  const dispatch = useDispatch();

  function setMode(mode) {
    setCurrentMode(mode.id)
    localStorage.setItem('themeMode', mode.class)
    dispatch(ThemeAction.setMode(mode.class))
  }

  function setColor(color) {
    setCurrentColor(color.id)
    localStorage.setItem('colorMode', color.class)
    dispatch(ThemeAction.setColor(color.class))
  }

  useEffect(() => {
    const themeClass = modeSettings.find(e => e.class === localStorage.getItem('themeMode', 'theme-mode-light'));
    const colorClass = colorSettings.find(e => e.class === localStorage.getItem('colorMode', 'theme-mode-light'));

    if (themeClass !== undefined) setCurrentMode(themeClass.id);
    if (colorClass !== undefined) setCurrentColor(colorClass.id);
  }, []);

  return (
    <div>
      <button ref={menuToggleRef} className="dropdown__toggle" onClick={() => menuRef.current.classList.add('active')}>
        <i className='bx bx-palette'></i>
      </button>
      <div ref={menuRef} className="theme-menu">
        <h4>Theme settings</h4>
        <button className="theme-menu__close" onClick={() => menuRef.current.classList.remove('active')}>
          <i className='bx bx-x'></i>
        </button>
        <div className="theme-menu__select">
          <span>Choose mode</span>
          <ul className="mode-list">
            {
              modeSettings.map((item, index) => (
                <li key={index} onClick={() => setMode(item)}>
                  <div className={`mode-list__color ${item.background} ${item.id === currentMode ? 'active' : ''}`}>
                    <i className='bx bx-check'></i>
                  </div>
                  <span>{item.name}</span>
                </li>
              ))
            }
          </ul>
        </div>
        <div className="theme-menu__select">
          <span>Choose color</span>
          <ul className="mode-list">
            {
              colorSettings.map((item, index) => (
                <li key={index} onClick={() => setColor(item)}>
                  <div className={`mode-list__color ${item.background} ${item.id === currentColor ? 'active' : ''}`}>
                    <i className='bx bx-check'></i>
                  </div>
                  <span>{item.name}</span>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </div>
  )
};


export default ThemeMenu;
