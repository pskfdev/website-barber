import React, {useState} from 'react';
import './Gallery.css';
import Header from '../component/Header.js';
import UseFetch from '../method/UseFetch';
import Modal from '../component/Modal';
import OpenModal from '../method/OpenModal';
import ReactLoading from 'react-loading';
import { Sectionhero, Wrapper, Btn } from '../styles/styledElement';


function Gallery() {

  const { data, loading, error } = UseFetch('./Data.json');
  const { imgNumber, modal, openModal, closeModal } = OpenModal('../method/OpenModal.js');

  const [ hairstyle, setHairstyle ] = useState('');           //ใช้เก็บค่าการ filter

  const filterHairs = data.filter((hair) => {
    return hair.title.includes(hairstyle);
  });                                                         //เอา data มา filter title แล้วนำค่า title ไปใส่ไว้ที่ state[hairstyle]

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!!loading) {
    return <div style={{display: "flex", justifyContent: "center"}}>
              <ReactLoading type={'spin'} color={'#34a0ff'} height={'10%'} width={'10%'} />
            </div>;
  } else {

    return (
      <section className='gallery'>
        <Header header="GALLERY" />
        <div className='gallery-container'>
          <div className="gallery-search">
            <input type="text" 
                   className='input-search' 
                   placeholder='Search..  [ ex. undercut ]' 
                   value={hairstyle} 
                   onChange={(e) => {setHairstyle(e.target.value)}} />         {/* รับค่าการพิม(e) ไปเก็บไว้ที่ state [hairstyle] */}
          </div>
          <div className="gallery-content">
            {filterHairs.map((item) => {                                /* นำค่าที่ filter แล้วมาทำการ Map */
              return (
                <div className='gallery-items' key={item.id} onClick={() => openModal(item.id)}>
                  <img src={item.url} alt="" />
                </div>
              )
            })}
          </div>
        </div>
        {modal && <Modal src={data[imgNumber].url} closeModal={closeModal} />}
        <Sectionhero>
          <Wrapper>
            <h4>ENJOY AN UNFORGETTABLE BARBERING & SERVICE</h4><br /><br />
            <Btn to="/">GET PRICING</Btn>
          </Wrapper>
        </Sectionhero>
      </section>
    )
  }
}

export default Gallery
