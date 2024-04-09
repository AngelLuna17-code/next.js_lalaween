"use client";
import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';

const Portafolio = () => {
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
        "/portafolio/item-10.webp",
        "/portafolio/item-11.webp",
        "/portafolio/item-12.webp",
        "/portafolio/item-13.webp"
    ];

    const sliderRef = useRef();

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    return (
        <section className='px-[15px] py-[100px]'>
            <div className='container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5'>
                <div className='order-2 lg:order-1'>
                    <Slider
                        className='slider w-[85%] sm:w-[90%] md:w-[93%] lg:w-[95%] mx-auto'
                        ref={sliderRef}
                        {...settings}>
                        {images.map((image, index) => (
                            <div key={index}>
                                <div className='mx-[5px] sm:mx-[30px] md:mx-[5px]'>
                                    <Image
                                        className='h-auto w-[100%] mx-auto rounded-[15px]'
                                        height={100}
                                        width={100}
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
                <div className='flex items-center justify-center order-1 lg:order-2'>
                    <div>
                        <h2 className='text-white text-center text-[25px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl-[44px] 2xl:text-[48px] title-container '>
                            Mira nuestro
                            <br />
                            <span className='text-white text-center text-[25px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl-[44px] 2xl:text-[48px] title-container title'>
                                portafolio
                            </span>
                        </h2>
                        <p className='text-center mt-3'>
                            Nosotros somos LalaWeen, agencia de publicidad y diseño. El creative team de diseño y marketing, que tu negocio necesita. Con la experiencia que nos respalda llevaremos tu negocio al siguiente nivel.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Portafolio;
