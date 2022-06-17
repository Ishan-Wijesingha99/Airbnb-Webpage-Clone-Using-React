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

      <Card1
        cardNo={1}
        // THIS IS HOW YOU ADD IMAGES AS PROPERTIES OF THE PROP OBJECT
        img={require('../src/images/card1.png')}
        rating="5.0"
        reviewCount="6"
        country="USA"
        title="Life lessons with Katie Zaferes"
        price="136"
      />

  </React.StrictMode>
)

