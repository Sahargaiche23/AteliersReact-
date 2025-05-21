import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
// @ts-ignore
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error("Root element not found. Make sure there is a <div id='root'></div> in your index.html.");
}

const root = createRoot(rootElement);
root.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);