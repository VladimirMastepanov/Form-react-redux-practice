import ReactDOM from 'react-dom/client';
import React from 'react';
import { createStore } from 'redux';

import App from './components/App.jsx';
import reducers from './reducers.js';
import { updateText, resetText } from './actions.js';

/* eslint-disable no-underscore-dangle */
const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
/* eslint-enable */

const mountNode = document.getElementById('container');
const root = ReactDOM.createRoot(mountNode);

const render = (text) => {
  root.render(
    <App
      dispatch={store.dispatch}
      text={text}
      updateText={updateText}
      resetText={resetText}
    />,
  );
};

store.subscribe(() => {
  const { text } = store.getState();
  render(text);
});

render();
