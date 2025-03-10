import React, { useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import ThemeAction from './redux/actions/ThemeActions';

import Routes from './components/Routes';
import Sidebar from './components/Sidebar/Sidebar';
import TopNav from './components/TopNav/TopNav';

import './App.css';

const App = () => {
  const themeReducer = useSelector(state => state.ThemeReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    const themeClass = localStorage.getItem('themeMode', 'theme-mode-light');
    const colorClass = localStorage.getItem('colorMode', 'theme-mode-light');

    dispatch(ThemeAction.setMode(themeClass));
    dispatch(ThemeAction.setColor(colorClass));
  }, [dispatch])

  return (
    <BrowserRouter>
      <Route render={(props) => (
        <div className={`layout ${themeReducer.mode} ${themeReducer.color}`}>
          <Sidebar {...props} />
          <div className="layout__content">
            <TopNav />
            <div className="layout__content-main">
              <Routes />
            </div>
          </div>
        </div>
      )} />
    </BrowserRouter>
  )
}

export default App;

