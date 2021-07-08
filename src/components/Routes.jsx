import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Customers from '../pages/Customers';
import Products from '../pages/Products';
import Orders from '../pages/Orders';
import Analytics from '../pages/Analytics';
import Categories from '../pages/Categories';
import Discounts from '../pages/Discounts';
import Inventories from '../pages/Inventories';
import Settings from '../pages/Settings';

const Routes = () => {
  return (
    <Switch>
      <Route path='/' exact component={Dashboard} />
      <Route path='/customers' exact component={Customers} />
      <Route path='/products' exact component={Products} />
      <Route path='/orders' exact component={Orders} />
      <Route path='/analytics' exact component={Analytics} />
      <Route path='/categories' exact component={Categories} />
      <Route path='/discounts' exact component={Discounts} />
      <Route path='/inventories' exact component={Inventories} />
      <Route path='/settings' exact component={Settings} />
    </Switch>
  )
}

export default Routes;
