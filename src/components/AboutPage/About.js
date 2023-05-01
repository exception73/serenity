import React from 'react'
import "./About.css";
import {BsLinkedin} from "react-icons/bs";

import gautam from "./gautam.jpeg";
import {BsGithub} from "react-icons/bs";
import Navbar from '../navbar/navbar';
export default function About() {
  
  const btnstyle = {backgroundColor:"none"};
  
  return (
    <div>
      <Navbar/>
    <div className='full-padding'>
        <div className='about-ot border-bottom border-danger'>About Me</div>
       
                  <div className='item1'>
                    <div className='image info'>
                      <img className="about-img" src={gautam}/>
                      <div className='about-stack'>
                        <div className = "about-block ">
                          <div className="h2">Gautam Khatri </div>
                                 <a target="_blank" href='https://www.linkedin.com/in/gautam-khatri-873131222/' className='about-btn ms-auto'><BsLinkedin style={{height:"100%",width:"100%"}}/></a>
                                 <a target="_blank" href='https://github.com/exception73' className='about-btn'><BsGithub   style={{height:"100%",width:"100%"}}/></a>
                        </div>
                        <div className='about-des'>
                            I am Gautam Khatri, co-developer of Serenity. I study at JC Bose University of Science and Technology, YMCA Faridabad, Computer Engineering with Data Science branch. My keen interest in web development attracted me towards GeeksForGeeks hackathons. This website is a contribution in the "Solving For India" Hackathon. By building this website my motto is to give a serene experience to our customers.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                </div>

  )
}
