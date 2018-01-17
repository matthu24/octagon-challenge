import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from './navbar/navbar';
import Landing from './landing/landing';
import Form from './form/form_container';
import Data from './data/data_container';
import Footer from './footer';

const App = () => (
  <div>
    <Route path="/" component={NavBar}/>
    <Switch>
      <Route exact path="/" component={Landing}/>
      <Route exact path ="/form" component = {Form}/>
      <Route exact path = "/data" component={Data}/>
    </Switch>
    <Footer/>

  </div>
);

export default App;
