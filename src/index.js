/* Feel free to edit */
import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import allReducers from './reducers';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import { createLogger } from 'redux-logger';
import { compose, createStore, applyMiddleware, bindActionCreators } from 'redux';
import App from './App';

const logger = createLogger();
const store = createStore(
    allReducers,
    applyMiddleware(thunk, promise, logger)
);

const rootEl = document.getElementById('app');
const render = Component =>
  ReactDOM.render(
    /** wrapped the Appcontainer in a Provider 
     * to allow action creators and state to be mapped to the Component */
    <Provider store={store}>
      <AppContainer>
        <Component />
      </AppContainer>
    </Provider>,
    rootEl
  );

render(App);
if (module.hot) module.hot.accept('./App', () => render(App));
