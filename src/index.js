import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


export { default as Navigation } from "./components/Navigation";
export { default as Footer } from "./components/Footer";
export { default as Home } from "./components/Home";
export { default as Projects } from "./components/Projects";
export { default as Resume } from "./components/Resume";
export { default as Yelp } from "./components/Yelp";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
