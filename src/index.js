import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { FromProvider } from './context/FromContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      <FromProvider>
       <App />
      </FromProvider>
    </React.StrictMode>
);