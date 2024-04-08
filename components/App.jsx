"use client";
import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';

const App = () => {
    const images = [
        "/portafolio/item-1.webp",
        "/portafolio/item-2.webp",
        "/portafolio/item-3.webp",
        "/portafolio/item-4.webp",
        "/portafolio/item-5.webp",
        "/portafolio/item-6.webp",
        "/portafolio/item-7.webp",
        "/portafolio/item-8.webp",
        "/portafolio/item-9.webp",
        "/portafolio/item-10.webp"
    ];

    const sliderRef = useRef();

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000, // Coma faltante aquí
        responsive: [
            {
                breakpoint: 1280, // xl breakpoint
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1024, // lg breakpoint
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768, // md breakpoint
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 640, // sm breakpoint
                settings: {
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 360, // xs breakpoint
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <section className='px-[15px] py-[100px]'>
            <div className='container mx-auto grid grid-cols-1 lg:grid-cols-2'>
                <div>
                    <div>
                        <h2 className='text-white text-center text-[25px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl-[44px] 2xl:text-[48px] title-container '>
                            Mira nuestro
                            <br />
                            <span className='text-white text-center text-[25px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl-[44px] 2xl:text-[48px] title-container title'>
                                portafolio
                            </span>
                        </h2>
                    </div>
                </div>
                <div>
                    <Slider
                        className='slider w-[85%] sm:w-[90%] md:w-[93%] lg:w-[95%] mx-auto'
                        ref={sliderRef}
                        {...settings}>
                        {images.map((image, index) => (
                            <div key={index}>
                                <div className='mx-[5px] sm:mx-[30px] md:mx-[5px]'>
                                    <Image
                                        className='object-contain mx-auto'
                                        height={300}
                                        width={300}
                                        key={index}
                                        src={image}
                                        alt={`Image ${index + 1}`}
                                        sizes="100vw"
                                        loading='lazy'
                                    />
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
};

export default App;
