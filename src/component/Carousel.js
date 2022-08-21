import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import UseFetch from '../method/UseFetch';
import OpenModal from '../method/OpenModal';
import Modal from './Modal';


function Carousel() {

    const { data, error } = UseFetch('./Data.json');        //use function and variable UseFetch.js
    const { imgNumber, modal, openModal, closeModal } = OpenModal('../method/OpenModal.js');  //use function and variable OpenModal.js

    if (error) {                        //check error
        console.log(error);
    }

    function Arrow(props) {             //custom arrow carousel
        const { style } = props;
        return (
            <div style={{ ...style, display: "none" }} />
        );
    }

    const settings = {                 //custom option carousel
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 4000,
        slidesToShow: 4,
        slidesToScroll: 2,
        nextArrow: <Arrow />,
        prevArrow: <Arrow />,
        responsive: [
            {
                breakpoint: 1050,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 790,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className='con-carousel' style={{width: "100%", height: "500px"}}>
            <Slider {...settings}>
                {data.map((item) => {          //loop array in Data.json
                    return (
                        <div key={item.id} onClick={ () => openModal(item.id) }>
                            <img src={item.url} alt="" style={{width: "100%", height: "500px" , cursor: "pointer"}} />
                        </div>
                    )
                })}             
            </Slider>
            {modal && <Modal src={data[imgNumber].url} closeModal={closeModal}/>}
        </div>
    )
}

export default Carousel