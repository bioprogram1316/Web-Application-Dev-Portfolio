import React from 'react';
import {Route, Switch, withRouter, Redirect} from 'react-router-dom';

import Layout from './Layout/Layout';
import Home from './Home/Home';
import Experience from './Experience/Experience';
import About from './About/About';
import Education from './Education/Education';

function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path="/experience" component={Experience} />
          <Route path="/education" component={Education} />
          <Route path="/about" component={About} />
          <Route path="/" exact component={Home} />
          <Redirect to="/" />
        </Switch>
      </Layout>
    </div>
  );
}

export default withRouter(App);
