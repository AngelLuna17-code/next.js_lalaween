"use client";
import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Portafolio2 = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [hovering, setHovering] = useState(false);

    const images = [
        "/portafolio/branding-1/item-1.webp",
        "/portafolio/branding-1/item-2.webp",
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            if (!hovering) {
                setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
            }
        }, 2000);

        return () => clearInterval(interval);
    }, [hovering, images.length]); 

    const handleHover = (isHovering) => {
        setHovering(isHovering);
    };

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000
    };

    return (
        <section className='py-[50px] px-[15px]'>
            <div className='container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5'>
                <div className='lg:order-1'>
                    <Slider
                        className='slider w-[85%] sm:w-[90%] md:w-[93%] lg:w-[95%] mx-auto'
                        {...settings}
                    >
                        {images.map((image, index) => (
                            <div key={index} className='w-full'>
                                <div className='lg:hidden'>
                                    <Image
                                        className={`w-auto h-[200px] sm:h-[400px] object-contain mx-auto ${index !== currentImageIndex && 'opacity-0'}`}
                                        src={image}
                                        alt="portafolio"
                                        width={100}
                                        height={100}
                                    />
                                </div>
                                <div className='hidden lg:block' onMouseEnter={() => handleHover(true)} onMouseLeave={() => handleHover(false)}>
                                    <div className='grid grid-cols-3'>
                                        <div className='w-full'>
                                            <div className='relative w-full h-full'>
                                                <Image
                                                    className={`h-auto w-[100%] ${index !== currentImageIndex && 'opacity-0'}`}
                                                    src={image}
                                                    width={100}
                                                    height={100}
                                                    objectFit="cover"
                                                    alt={`Imagen ${index + 1}`}
                                                />
                                                <Image
                                                    className={`h-auto w-[100%] absolute top-0 left-0 ${index === currentImageIndex && 'opacity-0 hover:opacity-100 transition-opacity duration-300'}`}
                                                    src={images[(index + 1) % images.length]}
                                                    width={100}
                                                    height={100}
                                                    objectFit="cover"
                                                    alt={`Imagen ${index + 2}`}
                                                />
                                            </div>
                                        </div>
                                    </div>
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

export default Portafolio2;
