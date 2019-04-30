/* eslint-disable no-unused-vars */
import React from 'react';
import { Route, Redirect, Switch, Link } from 'react-router-dom';
import Home from './Home'
import Hdp from './Hdp'
class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  render() {
    return (
      <div className="main">
        <Home />
        <Route path='/hdp' component={Hdp} />
      </div>
    );
  }
};

export default Main;
