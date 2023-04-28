import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {configureStore} from '@reduxjs/toolkit';
import acountReducer from './Slices/acountSlice'
import bonusReducer from './Slices/bonusSlice'
import { Provider } from 'react-redux'
import rewardReducer from './Reducers/reawrdReducer';

const reduxStore=configureStore({
reducer:{
    acount: acountReducer,
    bonus:bonusReducer,
    reward:rewardReducer
}
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode >
    <Provider store={reduxStore}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
