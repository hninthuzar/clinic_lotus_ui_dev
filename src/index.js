import React from 'react';
import ReactDOM from 'react-dom';
import { addLocaleData } from "react-intl";
import en from "react-intl/locale-data/en";
import bm from "react-intl/locale-data/bm";
import './index.css';
import "bootstrap/dist/css/bootstrap.css";
import "antd/dist/antd.css";
import App from './App';
import * as serviceWorker from './serviceWorker';

addLocaleData(en);
addLocaleData(bm);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
