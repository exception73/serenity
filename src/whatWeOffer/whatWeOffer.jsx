import './whatWeOffer.css'
import { useNavigate } from 'react-router-dom'
import React from 'react'


const WhatWeOffer = () => {
    const navigation = useNavigate()
  return (
    <div className='whatweoffer'>
        <button onClick={ () => navigation("/whatWeOffer/Movies")}>movies</button>
        <button onClick={ () => navigation("/whatWeOffer/Musics")}>Musics</button>
        <button onClick={ () => navigation("/whatWeOffer/Books")}>books</button>
        <button onClick={ () => navigation("/whatWeOffer/Excercises")}>excercise</button>
    </div>

  )
}

export default WhatWeOffer