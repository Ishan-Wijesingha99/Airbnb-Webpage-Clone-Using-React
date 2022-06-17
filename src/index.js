import React from 'react';
import ReactDOM from 'react-dom/client';
import { allCardsArray } from './components/AllCards';
import { ArrayOfParagraphs } from './components/ArrayOfParagraphs';
import { Card1 } from './components/Card';
import { GridandText } from './components/GridandText';
import { Navbar } from './components/Navbar';
import './index.css'



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Navbar />

    <GridandText />

    <div className='cards-flex-container'>
      {allCardsArray}
    </div>










    {/* <ArrayOfParagraphs /> */}
    {/* <Card
      cardNo={1}
      // THIS IS HOW YOU ADD IMAGES AS PROPERTIES OF THE PROP OBJECT
      // THIS ONLY WORKS IF THE IMAGES FOLDER IS IN SRC
      img={require('../src/images/card1.png')}
      rating="5.0"
      reviewCount="6"
      country="USA"
      title="Life lessons with Katie Zaferes"
      price="136"
    /> */}
  </React.StrictMode>
)


















/*

// .map() challenges

// challenge 1
const numbers = [1, 2, 3, 4, 5];

const numbersSquared = numbers.map(element => element**2);

console.log(numbersSquared);



// challenge 2
const names = ['alice', "bob", "charlie", "danielle"];

const capitalNames = names.map(element => element[0].toUpperCase() + element.slice(1));

console.log(capitalNames);



// challenge 3
const pokemons = ["Bulbasaur", "Charmander", "Squirtle"];

const pokemansPTags = pokemons.map(element => `<p>${element}</p>`);

console.log(pokemansPTags);

*/