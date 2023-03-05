import "./landingpage.css";
import { useNavigate } from "react-router-dom";

import cup from '../images/cup.png';
import ladki from '../images/ladki.png';

import React from "react";

const Landingpage = () => {
  const navigation = useNavigate();

  return (
    <div className="container">

        <div className="allcontent" >
        <div className="leftdiv">

            <div className="logoandname">

                <div className="title">
                    <p className="serenity">Serenity</p>
                    <p className="tagline">&#8212; Laughter 🤣 is the Best Medicine.</p>
                </div>
                <div className="cup">
                    <button className="cupbtn" style={{"background-color":"#F6E2E3"}}><img src={cup} alt="cup" /></button>
                </div>

            </div>


            <div className="stressPara">
                <p>Stress is a normal part of life, but it doesn't have to control you. So you donot neet to worry. JUST RELAX AND CHILL WIH US. Learn how to manage it with our helpful tips.</p>
            </div>

            <button
            className="take_a_break_button"
            onClick={() => navigation("/whatWeOffer")}
        >
            Take a Break
            </button>

        </div>

        
            <img  id="ladki" src={ladki} alt="ladki" />
        
            </div>
    </div>
  );
};

export default Landingpage;
