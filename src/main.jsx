import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

/**
 * Main entry point for the React application
 *
 * Initializes the React application by rendering the App component
 * within a BrowserRouter for client-side routing. Mounts to the DOM
 * element with id 'root' and applies global styles from index.css.
 *
 * This file serves as the bootstrap for the entire application,
 * setting up React's virtual DOM and routing capabilities.
 */
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);