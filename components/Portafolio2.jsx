"use client";
import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Portafolio2 = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
    };
    return (
        <section className='py-[50px] px-[15px]'>
            <div className='container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5'>
                <div className='order-2 lg:order-1'>
                    <Slider
                        className='w-[85%] lg:w-[90%] mx-auto'
                        {...settings}>
                        <div className='w-full'>
                            <Image
                                className='w-auto h-[200px] sm:h-[400px] object-contain mx-auto'
                                src="/portafolio/branding-1/item-3.webp"
                                alt="portafolio"
                                width={100}
                                height={100}
                            />
                        </div>
                        <div>
                            <Image
                                className='w-auto h-[200px] sm:h-[400px] object-contain mx-auto'
                                src="/portafolio/branding-2/item-1.webp"
                                alt="portafolio"
                                width={100}
                                height={100}
                            />
                        </div>
                        <div>
                            <Image
                                className='w-auto h-[200px] sm:h-[400px] object-contain mx-auto'
                                src="/portafolio/branding-3/item-4.webp"
                                alt="portafolio"
                                width={100}
                                height={100}
                            />
                        </div>
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
