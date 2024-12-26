import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './Aantarya/App.tsx';
import './Aantarya/index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
