import React from 'react';
import ReactDOM from 'react-dom/client';
import { Card1 } from './components/Card1';
import { GridandText } from './components/GridandText';
import { Navbar } from './components/Navbar';
import './index.css'



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
      <Navbar />
      <GridandText />
      <Card1 />
  </React.StrictMode>
)

