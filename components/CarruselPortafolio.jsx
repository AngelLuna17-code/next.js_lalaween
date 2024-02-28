'use client';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';

const CarruselPortafolio = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: 'linear',
        perspective: 1000,
        useTransform: true,
        tilt: 60,
    };

    return (
        <section>
            <div className='container mx-auto grid grid-cols-1 lg:grid-cols-2 py-[50px] lg:py-[100px] gap-8 lg:gap-0'>
                <div className='flex items-center justify-center'>
                    <div className='text-white text-center'>
                        <h2 className='text-white text-center text-[25px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl-[44px] 2xl:text-[48px] title-container '>
                            Mira nuestro
                        </h2>
                        <h2 className='text-white text-center text-[25px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl-[44px] 2xl:text-[48px] title-container title'>
                            portafolio
                        </h2>
                        <p className='w-[80%] mt-3 mx-auto'>
                            Nosotros somos LalaWeen, agencia de publicidad y diseño. El creative team de diseño y marketing, que tu negocio necesita. Con la experiencia que nos respalda llevaremos tu negocio al siguiente nivel.
                        </p>
                    </div>
                </div>
                <div className='flex items-center justify-center'>
                    <Slider className='w-[50%]' {...settings}>
                        <div>
                            <Image
                                className='mx-auto rounded-[15px]'
                                src="/slider/1.webp"
                                alt="imagen1"
                                height={0}
                                width={400}
                            />
                        </div>
                        <div>
                            <Image
                                className='mx-auto rounded-[15px]'
                                src="/slider/2.webp"
                                alt="imagen2"
                                height={0}
                                width={400}
                            />
                        </div>
                        <div>
                            <Image
                                className='mx-auto rounded-[15px]'
                                src="/slider/3.webp"
                                alt="imagen3"
                                height={0}
                                width={400}
                            />
                        </div>
                        {/* Agrega más imágenes si es necesario */}
                    </Slider>
                </div>
            </div>
        </section>
    );
};

export default CarruselPortafolio;