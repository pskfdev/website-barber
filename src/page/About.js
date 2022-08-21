import React from 'react';
import Header from "../component/Header.js";
import { Container, Wrap, Sectionhero, Wrapper, Btn } from '../styles/styledElement';


function About() {

  return (
    <>
      <Header header="ABOUT" />
      <Container>
        <h2>We provide barbering experience that customers love, day after day after day. It is not a big secret. People just want more of it.</h2>
        <br /><br />
        <img src={'/img/bg1.avif'} alt="" style={{ width: "100%", minWidth: "400px" }} />
        <br /><br /><br />
        <Wrap>
          <p>Maecenas volutpat, diam enim sagittis quam, id porta quam. Sed id dolor consectetur fermentum volutpat nibh, accumsan purus. Lorem ipsum dolor sit semper amet, consectetur adipiscing elit. In maximus ligula metus pellentesque mattis. Donec vel ultricies purus. Nam dictum sem, ipsum aliquam . Etiam sit amet fringilla lacus. Pellentesque suscipit ante at ullamcorper pulvinar neque porttitor. Integer lectus. Praesent sed nisi eleifend, fermentum orci amet, iaculis libero.</p>
        </Wrap>
        <br /><br />
        <Wrap>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In maximus ligula semper metus pellentesque mattis. Maecenas volutpat, diam enim sagittis quam, id porta quam. Sed id dolor consectetur fermentum nibh volutpat, accumsan purus. Etiam sit amet fringilla lacus. Pellentesque suscipit ante at ullamcorper pulvinar neque porttitor. Integer lectus. Praesent sed nisi eleifend, fermentum orci amet, iaculis libero. Donec vel ultricies purus. Nam dictum sem, eu aliquam.</p>
        </Wrap>
        <br /><br />
        <img src={'/img/barber-shop.png'} alt="" style={{ width: "25%", minWidth: "200px" }} />
      </Container>
      <Sectionhero>
        <Wrapper>
          <h4>ENJOY AN UNFORGETTABLE BARBERING & SERVICE</h4><br /><br />
          <Btn to="/">GET PRICING</Btn>
        </Wrapper>
      </Sectionhero>
    </>
  )
}

export default About
