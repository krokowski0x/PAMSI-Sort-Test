import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router-dom';
import Particles from 'react-particles-js';
import particlesConfig from '../particles-config.json';
import createBrowserHistory from 'history/createBrowserHistory'

import styles from './styles.scss';

import Dashboard from './components/Dashboard';
import SortTest from './components/SortTest';

const history = createBrowserHistory();

const App = () => {
  return (
    <Router history={history}>
      <div>
        <Route exact path='/' component={Dashboard} />
        <Route path='/:sortType' component={SortTest} />
        <Particles config={particlesConfig} className='particles'/>
      </div>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("app-container"));
