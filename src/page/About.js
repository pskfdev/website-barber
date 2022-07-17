import React from 'react';
import './About.css';
import Header from "../component/Header.js";


function About() {
  return (
    <section className='about'>
      <Header header="ABOUT"/>
      <div className='about-content'>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae illo facilis, laboriosam quod excepturi nam mollitia quibusdam voluptatibus blanditiis sit?</p>
      </div>
    </section>
  )
}

export default About
