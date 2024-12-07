import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/style.css'; // Stiliai
import App from './App.jsx'; // Pagrindinis komponentas

// Suranda root elementą
const rootElement = document.getElementById('root');

if (!rootElement) {
  console.error('Root element not found. Patikrink, ar index.html turi <div id="root"></div>.');
} else {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}


