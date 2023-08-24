/* eslint-disable no-unused-vars */
/* eslint-disable semi */
import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import App from './App/App';

const rootElement = document.getElementById('root');

createRoot(rootElement).render(
  <>
    <App />
  </>
);
