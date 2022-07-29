import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carousel.css';
import UseFetch from '../method/UseFetch';

function Carousel() {

    const { data, error } = UseFetch('./Data.json');        //use function and variable UseFetch

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
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className='con-carousel'>
            <Slider {...settings}>
                {data.map(item => (             //loop array in Data.json
                    <div key={item.id}>
                        <img src={item.url} />
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default Carousel