import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Landing from '~/pages/Landing';
import Shop from '~/pages/shop/Shop';
import About from '~/pages/About';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Landing} />
      <Route path="/about" component={About} />
      <Route path="/shop" component={Shop} />
    </Switch>
  );
}
