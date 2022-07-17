import React from 'react';
import './PriceList.css';
import Header from '../component/Header.js';

function PriceList() {
  return (
    <section className='price-list'>
      <Header header="PRICE LIST"/>
      <div className='price-list-content'>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae illo facilis, laboriosam quod excepturi nam mollitia quibusdam voluptatibus blanditiis sit?</p>
      </div>
    </section>
  )
}

export default PriceList