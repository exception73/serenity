import './whatWeOffer.css'
import cup from './cup.png';
import book from './books.png';
import excercise from './excercise.png';
import movies from './movies.png';
import musics from './music.png';

import { useNavigate } from 'react-router-dom'
import React from 'react'


const WhatWeOffer = () => {
    const navigation = useNavigate()
  return (
    <div className='offercontainer'>
      <div className='offerheader'>
        <p>What We Offer</p>
        <img src={cup} alt="" />
      </div>
      <div className='whatweoffer'>
          <button className='offeringBtn moviesPalate' onClick={ () => navigation("/whatWeOffer/Movies")}>
            <img src={movies} alt="movies" />
            <p>It is stated that the influence of the relation between the software engineering concepts and practices and the major outcomes the.</p>
          </button>

          <button className='offeringBtn bookPalate' onClick={ () => navigation("/whatWeOffer/Books")}>
            <img src={book} alt="book" />
            <p>"without a doubt, BOb Abel was right in saying that, the core principles provides benefts from the probabliyt of ancicden toenetl"</p>
          </button>

          <button className='offeringBtn musicPalate' onClick={ () => navigation("/whatWeOffer/Musics")}>
            <img src={musics} alt="musics" />
            <p>book of the draft analysis and prior decision and early design solution.
              To be honest, dimensions of the formal actions has more.
            </p>
          </button>
          
          <button className='offeringBtn excercisePalate' onClick={ () => navigation("/whatWeOffer/Excercises")}>
            <img src={excercise} alt="excercise" />
            <p>"It should be borne in midns that the edges of the profits discards the principle of the Evolution of clear potential."</p>
          </button>
      </div>
      <div className='donateus'>
        <button>Donate us</button>
      </div>
    </div>

  )
}

export default WhatWeOffer