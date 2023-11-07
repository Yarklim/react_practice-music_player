import React from 'react';
import ReactDOM from 'react-dom/client';
import AudioProvider from './context/AudioContext.jsx';
import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AudioProvider>
      <App />
    </AudioProvider>
  </React.StrictMode>
);
