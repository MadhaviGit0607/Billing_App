import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./index.css";

const rootElement = document.getElementById('root'); // Ensure 'root' exists in HTML
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<App />);
} else {
  console.error("Root element not found!");
}





