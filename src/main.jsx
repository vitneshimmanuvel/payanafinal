import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

// Create a loading screen element
const LoadingScreen = () => {
  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '1.5rem',
      backgroundColor: '#111',
      color: '#fff'
    }}>
      Loading...
    </div>
  );
};

const root = createRoot(document.getElementById('root'));

// Show loading screen first
root.render(
  <StrictMode>
    <LoadingScreen />
  </StrictMode>
);

// Then show App after 2.5 seconds
setTimeout(() => {
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}, 3000);
