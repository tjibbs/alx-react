import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import App from './App/App';
import MyNotifications from './Notifications/Notifications';

const rootElement = document.getElementById('root');

createRoot(rootElement).render(
  <>
    <MyNotifications />
    <App />
  </>
);
