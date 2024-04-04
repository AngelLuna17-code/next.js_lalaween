"use client"
import { useState } from "react";
import Slider from "react-slick";

const images = [
    '/logos/logo-1.webp',
    '/logos/logo-2.webp',
    '/logos/logo-3.webp',
    '/logos/logo-4.webp',
    '/logos/logo-5.webp',
];

function App() {
    const NextArrow = ({ onClick }) => {
        return (
            <button className="absolute top-1/2 transform -translate-y-1/2 right-4 z-10" onClick={onClick}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M9.707 2.293a1 1 0 0 1 1.414 0l8 8a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414-1.414L17.586 11H3a1 1 0 1 1 0-2h14.586l-7.293-7.293a1 1 0 0 1 0-1.414z" clipRule="evenodd" />
                </svg>
            </button>
        );
    };

    const PrevArrow = ({ onClick }) => {
        return (
            <button className="absolute top-1/2 transform -translate-y-1/2 left-4 z-10" onClick={onClick}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 17.707a1 1 0 0 1-1.414 0l-8-8a1 1 0 0 1 0-1.414l8-8a1 1 0 0 1 1.414 1.414L2.414 9H17a1 1 0 1 1 0 2H2.414l7.293 7.293a1 1 0 0 1 0 1.414z" clipRule="evenodd" />
                </svg>
            </button>
        );
    };

    const [imageIndex, setImageIndex] = useState(0);

    const settings = {
        infinite: true,
        lazyLoad: true,
        speed: 300,
        slidesToShow: 3,
        centerMode: true,
        centerPadding: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        beforeChange: (current, next) => setImageIndex(next),
    };

    return (
        <section className="py-[50px] px-[15px]">
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2">
                <div className="flex items-center justify-center">
                    <div>
                        <h2 className='text-white text-center text-[25px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl-[44px] 2xl:text-[48px] title-container '>
                            Mira nuestro
                            <br />
                            <span className='text-white text-center text-[25px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl-[44px] 2xl:text-[48px] title-container title'>
                                portafolio
                            </span>
                        </h2>
                        <p className='w-[80%] mt-3 mx-auto text-center'>
                            Nosotros somos LalaWeen, agencia de publicidad y diseño. El creative team de diseño y marketing, que tu negocio necesita. Con la experiencia que nos respalda llevaremos tu negocio al siguiente nivel.
                        </p>
                    </div>
                </div>
                <div>
                    <Slider {...settings}>
                        {images.map((img, idx) => (
                            <div className={idx === imageIndex ? "slide activeSlide" : "slide"} key={idx}>
                                <img src={img} alt={`Slide ${idx}`} />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
}

export default App;
