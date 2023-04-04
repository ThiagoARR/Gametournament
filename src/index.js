import React from 'react';
import ReactDOM from 'react-dom/client';
import { Context } from './Context/Context';
import './index.scss';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Context>
    <React.StrictMode>
      <App className="font-nunito"/>
    </React.StrictMode>
  </Context>
);