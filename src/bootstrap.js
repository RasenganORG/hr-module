import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import store from './store/store';
import { Provider } from 'react-redux';

const mount = (el) => {
  const root = createRoot(el);
  root.render(
    <Provider store={store}>
      <App />
    </Provider>
  );
};

if (process.env.NODE_ENV === 'development') {
  const el = document.querySelector('#human-resources-root');

  if (el) {
    mount(el);
  }
}

export { mount };
