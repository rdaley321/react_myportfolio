import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import '../styles/App.css';
import BaseLayout from './BaseLayout'
import Home from './Home'

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <BaseLayout>
            <Switch>
              <Route path='/' component={Home} />
            </Switch>
          </BaseLayout>
        </BrowserRouter>
    );
  }
}

export default App;
