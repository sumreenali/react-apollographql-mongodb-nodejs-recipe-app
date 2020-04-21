import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';    

import App from './components/App';
import Signup from './components/Auth/Signup';
import Signin from './components/Auth/Signin';

import  ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

       

const client = new ApolloClient({
  uri: 'http://localhost:4444/graphql'
})


const Root = () =>{
  return <Router>
    <Switch>
      <Route path="/" exact component={App}/>
      <Route path="/signin" component={Signin}/>
      <Route path="/signup" component={Signup}/>
      <Redirect to="/"/>
    </Switch>
  </Router>
}
ReactDOM.render(
  <ApolloProvider client={client}>
    <Root />
  </ApolloProvider>,

  document.getElementById('root')
);






// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
