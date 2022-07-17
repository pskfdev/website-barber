import React from 'react';
import './Gallery.css';
import Header from '../component/Header.js';

function Gallery() {
  return (
    <section className='gallery'>
      <Header header="GALLERY"/>
      <div className='gallery-content'>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae illo facilis, laboriosam quod excepturi nam mollitia quibusdam voluptatibus blanditiis sit?</p>
      </div>
    </section>
  )
}

export default Gallery
