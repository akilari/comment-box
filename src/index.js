import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import Comments from './containers/comments';
import Forum from './containers/forum';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';


const createStoreWithMiddleWare = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleWare(reducers)}>
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route exact path="/forum" component={Comments} />
      </div>
  </Router>
  </Provider>
  , document.getElementById('root-react'));
