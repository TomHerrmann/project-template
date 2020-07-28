import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import './style.css';

import App from './App.jsx';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);

if (module.hot) {
  module.hot.accept(App, function() {
    console.log('Accepting the updated App module!');
  });
}
