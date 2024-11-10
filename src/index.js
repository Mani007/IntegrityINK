import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { ReactTogether } from 'react-together'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <ReactTogether 
  // sessionParams={{
  //   appId: import.meta.env['VITE_APP_ID'],
  //   apiKey: import.meta.env['VITE_API_KEY']
  // }}
  // >
        <App />
  // </ReactTogether>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
