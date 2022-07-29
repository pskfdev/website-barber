import React from 'react'
import ButtonGet from '../component/ButtonGet';
import Carousel from '../component/Carousel';
import { FiAward, FiScissors, FiWatch, FiTruck } from "react-icons/fi";
import './Home.css';

function Home() {
  return (
    <section className='home'>
      <div className='container-home bg-home'>
        <div className='home-logo'>
          <img src='http://heis.pro/rhythm/rhythm-original/images/barbershop/image-1.png' />
        </div>
      </div>

      <div className='content-home'>
        <div className='content-items1'>
        </div>
        <div className='content-items2'>
          <h1>GET MODERN BARBERING EXPERIENCE FOR SERIOUS MEN</h1><br />
          <p>Marius auctor ex id urna faucibus. In maximus ligula semper metus lorem pellentesque mattis.Maecenas volutpat, diam enim sagittis quam, id porta quam. Lorem ipsum dolor sit amet, c-r adipiscing elit volutpat, accumsan ligula semper metus pellentesque mattis. Maecenas volutpat, diam enim. Donec vel ultricies dictum sem, eu aliquam.</p>
          <br />
          <img src='http://heis.pro/rhythm/rhythm-original/images/photographer/signature.png' />
        </div>
        <div className='content-items3'>
          <h1>WE PROVIDE THE FULL LIST OF BARBERING SERVICES</h1><br />
          <div className='container-icon'>
            <div className='items-icon'>
              <img src='http://heis.pro/rhythm/rhythm-original/images/barbershop/icon-1.png' />
              <h4>HAIRCUTS</h4>
            </div>
            <div className='items-icon'>
              <img src='http://heis.pro/rhythm/rhythm-original/images/barbershop/icon-2.png' />
              <h4>SHAVES</h4>
            </div>
            <div className='items-icon'>
              <img src='http://heis.pro/rhythm/rhythm-original/images/barbershop/icon-3.png' />
              <h4>KIDS STYLE</h4>
            </div>
          </div>
          <p>Maecenas volutpat, diam enim sagittis quam, id porta quam. Lorem ipsum dolor sit amet, c-r adipiscing elit volutpat, accumsan ligula semper metus pellentesque mattis.</p>
          <br /><br />
          <ButtonGet nameBtn="GET PRICING" to="/price-list" />
        </div>
        <div className='content-items4'>
        </div>
      </div>

      <div className='content-home2'>
        <div className='items-home2'>
          <FiAward fontSize="2rem" />
          <h4>WHAT PEOPLE SAY?</h4>
          <p>Phasellus luctus commodo ullamcorper a posuere rhoncus commodo elit. Aenean congue, risus utaliquam dapibus. Thanks!</p>
          <h5>John Doe, doodle inc.</h5>
        </div>
      </div>

      <div className='content-home3'>
        <div className='items-home3'>
          <img src='http://heis.pro/rhythm/rhythm-original/images/barbershop/image-2.png' />
          <p>Phasellus luctus commodo ullamcorper a posuere rhoncus commodo elit. Aenean congue, risus utaliquam dapibus. Thanks!</p>
          <ButtonGet nameBtn="BOOK AN APPOINTMENT" to="/" />
        </div>
      </div>

      <div className='content-home4'>
        <Carousel />
      </div>

      <div className='content-home5'>
        <h4>WHY CHOOSE US?</h4>
        <div className='container-items-home5'>
          <div className='items-home5'>
            <FiTruck fontSize="3rem" />
            <h5>INCREDIBLE RESULT</h5>
            <p>Lorem ipsum dolor sit amet, c-r adipiscing elit. In maximus ligula semper metus pellentesque mattis. Maecenas volutpat, diam enim.</p>
          </div>
          <div className='items-home5'>
            <FiWatch fontSize="3rem" />
            <h5>QUICK WAITERS</h5>
            <p>Proin fringilla augue at maximus vestibulum. Nam pulvinar vitae neque et porttitor. Praesent sed nisi eleifend, lorem fermentum orci sit amet, iaculis libero.</p>
          </div>
          <div className='items-home5'>
            <FiScissors fontSize="3rem" />
            <h5>QUALITY GUARANTEE</h5>
            <p>Curabitur iaculis accumsan augue, nec finibus mauris pretium eu. Duis placerat ex gravida nibh tristique porta. Nulla facilisi. Suspendisse ultricies eros blandit.</p>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Home
