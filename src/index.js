import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { GoogleOAuthProvider } from '@react-oauth/google';
import CheckLogged from './context/Context';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId='718890504784-ohnj72c567imf4a5dfboper9i0bj0gv4.apps.googleusercontent.com'>
      <Provider store={store}>
        <CheckLogged>
          <BrowserRouter>
            <App/>
          </BrowserRouter>
        </CheckLogged>
      </Provider>
    </GoogleOAuthProvider>
  </React.StrictMode>
);
