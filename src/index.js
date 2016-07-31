import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './stores/store';
import MovieContainer from './components/containers/MovieContainer';

// Render the main component into the dom
ReactDOM.render(
  <Provider store={store}>
    <MovieContainer />
  </Provider>,
  document.getElementById('app'));
