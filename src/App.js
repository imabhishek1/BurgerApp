import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import Orders from './containers/Orders/Orders';
import { I18nextProvider } from 'react-i18next';
import i18n  from './config/I18n';

class App extends Component {
  render () {
    return (
      <div>
        <I18nextProvider i18n={i18n}>
        <Layout>
          <Switch>
            <Route path="/checkout" component={Checkout} />
            <Route path="/orders" component={Orders} />
            <Route path="/" exact component={BurgerBuilder} />
          </Switch>
        </Layout>
        </I18nextProvider>
      </div>
    );
  }
}

export default App;
