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
                        {/* slide 1 */}
                        <div className='w-full'>
                            <div className='lg:hidden'>
                                <Image
                                    className='w-auto h-[200px] sm:h-[400px] object-contain mx-auto'
                                    src="/portafolio/branding-1/item-3.webp"
                                    alt="portafolio"
                                    width={100}
                                    height={100}
                                />
                            </div>
                            <div className='hidden lg:block'>
                                <div className=' grid grid-cols-2'>
                                    <div>
                                        <Image
                                            className='w-auto h-[200px] sm:h-[400px] object-contain mx-auto'
                                            src="/portafolio/branding-1/item-1.webp"
                                            alt="portafolio"
                                            width={100}
                                            height={100}
                                        />
                                    </div>
                                    <div>
                                        <Image
                                            className='w-auto h-[200px] sm:h-[400px] object-contain mx-auto'
                                            src="/portafolio/branding-1/item-3.webp"
                                            alt="portafolio"
                                            width={100}
                                            height={100}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* slide 1 */}
                        {/* slide 2 */}
                        <div className='w-full'>
                            <div className='lg:hidden'>
                                <Image
                                    className='w-auto h-[200px] sm:h-[400px] object-contain mx-auto'
                                    src="/portafolio/branding-2/item-1.webp"
                                    alt="portafolio"
                                    width={100}
                                    height={100}
                                />
                            </div>
                        </div>
                        {/* slide 2 */}
                        {/* slide 3 */}
                        <div className='w-full'>
                            <div className='lg:hidden'>
                                <Image
                                    className='w-auto h-[200px] sm:h-[400px] object-contain mx-auto'
                                    src="/portafolio/branding-3/item-4.webp"
                                    alt="portafolio"
                                    width={100}
                                    height={100}
                                />
                            </div>
                        </div>
                        {/* slide 3 */}
                        {/* slide 4 */}
                        <div className='w-full'>
                            <div className='lg:hidden'>
                                <Image
                                    className='w-auto h-[200px] sm:h-[400px] object-contain mx-auto'
                                    src="/portafolio/contenido-1/item-6.webp"
                                    alt="portafolio"
                                    width={100}
                                    height={100}
                                />
                            </div>
                        </div>
                        {/* slide 4 */}
                        {/* slide 5 */}
                        <div className='w-full'>
                            <div className='lg:hidden'>
                                <Image
                                    className='w-auto h-[200px] sm:h-[400px] object-contain mx-auto'
                                    src="/portafolio/contenido-2/item-3.webp"
                                    alt="portafolio"
                                    width={100}
                                    height={100}
                                />
                            </div>
                        </div>
                        {/* slide 5 */}
                        {/* slide 6 */}
                        <div className='w-full'>
                            <div className='lg:hidden'>
                                <Image
                                    className='w-auto h-[200px] sm:h-[400px] object-contain mx-auto'
                                    src="/portafolio/contenido-3/item-3.webp"
                                    alt="portafolio"
                                    width={100}
                                    height={100}
                                />
                            </div>
                        </div>
                        {/* slide 6 */}
                        {/* slide 7 */}
                        <div className='w-full'>
                            <div className='lg:hidden'>
                                <Image
                                    className='w-auto h-[200px] sm:h-[400px] object-contain mx-auto'
                                    src="/portafolio/contenido-4/item-3.webp"
                                    alt="portafolio"
                                    width={100}
                                    height={100}
                                />
                            </div>
                        </div>
                        {/* slide 7 */}
                        {/* slide 8 */}
                        <div className='w-full'>
                            <div className='lg:hidden'>
                                <Image
                                    className='w-auto h-[200px] sm:h-[400px] object-contain mx-auto'
                                    src="/portafolio/contenido-5/item-3.webp"
                                    alt="portafolio"
                                    width={100}
                                    height={100}
                                />
                            </div>
                        </div>
                        {/* slide 8 */}
                        {/* slide 9 */}
                        <div className='w-full'>
                            <div className='lg:hidden'>
                                <Image
                                    className='w-auto h-[200px] sm:h-[400px] object-contain mx-auto'
                                    src="/portafolio/contenido-6/item-3.webp"
                                    alt="portafolio"
                                    width={100}
                                    height={100}
                                />
                            </div>
                        </div>
                        {/* slide 9 */}
                        {/* slide 10 */}
                        <div className='w-full'>
                            <div className='lg:hidden'>
                                <Image
                                    className='w-auto h-[200px] sm:h-[400px] object-contain mx-auto'
                                    src="/portafolio/contenido-7/item-3.webp"
                                    alt="portafolio"
                                    width={100}
                                    height={100}
                                />
                            </div>
                        </div>
                        {/* slide 10 */}
                        {/* slide 11 */}
                        <div className='w-full'>
                            <div className='lg:hidden'>
                                <Image
                                    className='w-auto h-[200px] sm:h-[400px] object-contain mx-auto'
                                    src="/portafolio/contenido-8/item-3.webp"
                                    alt="portafolio"
                                    width={100}
                                    height={100}
                                />
                            </div>
                        </div>
                        {/* slide 11 */}
                        {/* slide 12 */}
                        <div className='w-full'>
                            <div className='lg:hidden'>
                                <Image
                                    className='w-auto h-[200px] sm:h-[400px] object-contain mx-auto'
                                    src="/portafolio/contenido-9/item-3.webp"
                                    alt="portafolio"
                                    width={100}
                                    height={100}
                                />
                            </div>
                        </div>
                        {/* slide 12 */}
                        {/* slide 13 */}
                        <div className='w-full'>
                            <div className='lg:hidden'>
                                <Image
                                    className='w-auto h-[200px] sm:h-[400px] object-contain mx-auto'
                                    src="/portafolio/contenido-10/item-3.webp"
                                    alt="portafolio"
                                    width={100}
                                    height={100}
                                />
                            </div>
                        </div>
                        {/* slide 13 */}
                        {/* slide 14 */}
                        <div className='w-full'>
                            <div className='lg:hidden'>
                                <Image
                                    className='w-auto h-[200px] sm:h-[400px] object-contain mx-auto'
                                    src="/portafolio/contenido-11/item-3.webp"
                                    alt="portafolio"
                                    width={100}
                                    height={100}
                                />
                            </div>
                        </div>
                        {/* slide 14 */}
                        {/* slide 15 */}
                        <div className='w-full'>
                            <div className='lg:hidden'>
                                <Image
                                    className='w-auto h-[200px] sm:h-[400px] object-contain mx-auto'
                                    src="/portafolio/contenido-12/item-3.webp"
                                    alt="portafolio"
                                    width={100}
                                    height={100}
                                />
                            </div>
                        </div>
                        {/* slide 15 */}
                        {/* slide 16 */}
                        <div className='w-full'>
                            <div className='lg:hidden'>
                                <Image
                                    className='w-auto h-[200px] sm:h-[400px] object-contain mx-auto'
                                    src="/portafolio/impresos-1/item-3.webp"
                                    alt="portafolio"
                                    width={100}
                                    height={100}
                                />
                            </div>
                        </div>
                        {/* slide 16 */}
                        {/* slide 17 */}
                        <div className='w-full'>
                            <div className='lg:hidden'>
                                <Image
                                    className='w-auto h-[200px] sm:h-[400px] object-contain mx-auto'
                                    src="/portafolio/impresos-2/item-3.webp"
                                    alt="portafolio"
                                    width={100}
                                    height={100}
                                />
                            </div>
                        </div>
                        {/* slide 17 */}
                        {/* slide 18 */}
                        <div className='w-full'>
                            <div className='lg:hidden'>
                                <Image
                                    className='w-auto h-[200px] sm:h-[400px] object-contain mx-auto'
                                    src="/portafolio/impresos-3/item-3.webp"
                                    alt="portafolio"
                                    width={100}
                                    height={100}
                                />
                            </div>
                        </div>
                        {/* slide 18 */}
                        {/* slide 19 */}
                        <div className='w-full'>
                            <div className='lg:hidden'>
                                <Image
                                    className='w-auto h-[200px] sm:h-[400px] object-contain mx-auto'
                                    src="/portafolio/impresos-4/item-3.webp"
                                    alt="portafolio"
                                    width={100}
                                    height={100}
                                />
                            </div>
                        </div>
                        {/* slide 19 */}
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