import React from 'react'
import ReactDom from 'react-dom/client'

import { App } from './app/App.jsx'
import './main.css'

const root = ReactDom.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
