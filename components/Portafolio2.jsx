"use client";
import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Portafolio2 = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [hovering, setHovering] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            if (!hovering) {
                setCurrentImageIndex((prevIndex) => (prevIndex + 1) % 2);
            }
        }, 2000);

        return () => clearInterval(interval);
    }, [hovering]);

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
                        style={{ background: 'rgba(0, 0, 0, 0.7)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' }}
                        className='slider w-[85%] sm:w-[90%] md:w-[93%] lg:w-[95%] mx-auto p-6 rounded-[15px]'
                        {...settings}
                    >
                        {/* slide 1 */}
                        <div className='w-full'>
                            {/* image xs */}
                            <div className='lg:hidden'>
                                <Image
                                    className="h-auto w-[100%]"
                                    src="/portafolio/branding-1/item-3.webp"
                                    alt="portafolio"
                                    width={100}
                                    height={100}
                                />
                            </div>
                            {/* image xs */}
                            <div className='hidden lg:block' onMouseEnter={() => handleHover(true)} onMouseLeave={() => handleHover(false)}>
                                <div className='grid grid-cols-3 gap-3'>
                                    {/* col 1 */}
                                    <div className='w-full'>
                                        <div className='relative w-full h-full'>
                                            <Image
                                                className={`h-auto w-[100%] ${currentImageIndex !== 0 && 'opacity-0'}`}
                                                src="/portafolio/branding-1/item-1.webp"
                                                width={100}
                                                height={100}
                                                objectFit="cover"
                                                alt="Imagen 1"
                                                sizes="100vw"
                                            />
                                            <Image
                                                className={`h-auto w-[100%] absolute top-0 left-0 ${currentImageIndex === 0 && 'opacity-0 hover:opacity-100 transition-opacity duration-300'}`}
                                                src="/portafolio/branding-1/item-2.webp"
                                                width={100}
                                                height={100}
                                                objectFit="cover"
                                                alt="Imagen 2"
                                                sizes="100vw"
                                            />
                                        </div>
                                    </div>
                                    {/* col 1 */}
                                    {/* col 2 */}
                                    <div className='flex items-center jusdtify-center col col-span-2'>
                                        <div className='w-full  '>
                                            <div className='relative w-full h-full '>
                                                <Image
                                                    className={`h-auto w-[100%] ${currentImageIndex !== 0 && 'opacity-0'}`}
                                                    src="/portafolio/branding-1/item-3.webp"
                                                    width={100}
                                                    height={100}
                                                    objectFit="cover"
                                                    alt="Imagen 1"
                                                    sizes="100vw"
                                                />
                                                <Image
                                                    className={`h-auto w-[100%] absolute top-0 left-0 ${currentImageIndex === 0 && 'opacity-0 hover:opacity-100 transition-opacity duration-300'}`}
                                                    src="/portafolio/branding-1/item-4.webp"
                                                    width={100}
                                                    height={100}
                                                    objectFit="cover"
                                                    alt="Imagen 2"
                                                    sizes="100vw"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* col 2 */}
                                </div>
                                <div className='grid grid-cols-2 gap-3 mt-3'>
                                    {/* col 3 */}
                                    <div className='w-full col col-span-1'>
                                        <div className='relative w-full h-full'>
                                            <Image
                                                className={`h-auto w-[100%] ${currentImageIndex !== 0 && 'opacity-0'}`}
                                                src="/portafolio/branding-1/item-5.webp"
                                                width={100}
                                                height={100}
                                                objectFit="cover"
                                                alt="Imagen 1"
                                                sizes="100vw"
                                            />
                                            <Image
                                                className={`h-auto w-[100%] absolute top-0 left-0 ${currentImageIndex === 0 && 'opacity-0 hover:opacity-100 transition-opacity duration-300'}`}
                                                src="/portafolio/branding-1/item-6.webp"
                                                width={100}
                                                height={100}
                                                objectFit="cover"
                                                alt="Imagen 2"
                                                sizes="100vw"
                                            />
                                        </div>
                                    </div>
                                    {/* col 3 */}
                                    {/* col 4 */}
                                    <div className='w-full col col-span-1'>
                                        <Image
                                            className='h-auto w-[100%]'
                                            src="/portafolio/branding-1/item-7.webp"
                                            width={100}
                                            height={100}
                                            objectFit="cover"
                                            alt="Imagen 2"
                                            sizes="100vw"
                                        />
                                    </div>
                                    {/* col 4 */}
                                </div>
                            </div>
                        </div>
                        {/* slide 1 */}
                        {/* slide 2 */}
                        <div>
                            2
                        </div>
                        {/* slide 2 */}
                        {/* slide 3 */}
                        <div>
                            3
                        </div>
                        {/* slide 3 */}
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
