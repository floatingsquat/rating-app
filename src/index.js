import React from 'react';
import { createRoot } from "react-dom/client";
import { RatingProvider } from './context/RatingContext';


import './index.css';
import App from './App';

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);


root.render(
  <React.StrictMode>
    <RatingProvider>
    <App />
    </RatingProvider>
    
  </React.StrictMode>,
 
);
