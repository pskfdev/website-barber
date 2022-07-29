import React from 'react';
import './About.css';
import Header from "../component/Header.js";
import UseFetch from '../method/UseFetch';


function About() {

  const { data, loading, error } = UseFetch('./Data.json');

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!!loading) {
    return <div>Loading...</div>;
  } else {

    return (
      <section className='about'>
        <Header header="ABOUT" />
        <div className='about-content'>
          <ul>
            {data.map(item => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae illo facilis, laboriosam quod excepturi nam mollitia quibusdam voluptatibus blanditiis sit?</p>
        </div>
      </section>
    );
  }

}

export default About
