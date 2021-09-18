import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './store';
import { Provider } from 'react-redux';
import jwt from 'jsonwebtoken';
import { history, http } from './helpers';
import ActionTypes from './store/action-types';

const jwt_secret = process.env.REACT_APP_JWT_SECRET;
let token = localStorage.getItem("token");
if (token) {
  jwt.verify(token, jwt_secret, (err, decoded) => {
    if (err) {
      token = null;
      store.dispatch({ type: ActionTypes.LOGOUT_USER});
      history.push('/login')
    } else {
      if (decoded.iss !== `${process.env.REACT_APP_API_URL}/auth/login`) {
        token = null;
        store.dispatch({ type: ActionTypes.LOGOUT_USER });
        history.push('/login');
      }
    }
  });
}
const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("root")
  );
};
if (token) {
  http.get("/auth/me").then(res => {
    store.dispatch({ type: ActionTypes.LOGIN_USER, currentUser: res.data });
    render();
  });
} else {
  render();
}


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
