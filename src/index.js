import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory} from 'react-router';
import reducers from './reducers';
import routes from './route';
import promise from 'redux-promise';
const createStoreWithMiddleware = applyMiddleware(promise)(createStore);
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <MuiThemeProvider muiTheme={getMuiTheme()}>
      <Router history={browserHistory} routes={routes} />
    </MuiThemeProvider>
  </Provider>
  , document.querySelector('.container'));
