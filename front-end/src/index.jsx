import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";

import App from './App';

import './index.css';

import * as serviceWorker from './serviceWorker';

const root = ReactDOMClient.createRoot(
  document.getElementById('root')
);

root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
