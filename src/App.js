import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import LandingPage from './LandingPage/Landingpage';
import WhatWeOffer from './whatWeOffer/whatWeOffer';
import Movies from './whatWeOffer/Movies/Movies';
import Excercises from './whatWeOffer/Excercises/Excercises';
import Books from './whatWeOffer/Books/Books';
import Musics from './whatWeOffer/Musics/Musics';

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={ <LandingPage/> }/>
        <Route path="/whatWeOffer" element={ < WhatWeOffer /> } />
        <Route path="/whatWeOffer/Movies" element={ < Movies /> } />
        <Route path="/whatWeOffer/Books" element ={ <Books /> } />
        <Route path="/whatWeOffer/Excercises" element={ < Excercises /> } /> 
        <Route path = "whatWeOffer/Musics" element={ <Musics /> } />

      </Routes>
    

    </BrowserRouter>
  );
}

export default App;
