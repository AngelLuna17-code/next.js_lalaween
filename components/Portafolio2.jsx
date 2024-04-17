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
            <div className='container mx-auto'>
                <div>

                </div>
                <div>
                    <Slider
                        className='slider w-[85%] lg:w-[90%]  mx-auto'
                        {...settings}>
                        <div>
                            <Image
                                src="/web/tanuki/item-1.webp"
                                alt="Imagen 1"
                                width={300}
                                height={200}
                            />
                        </div>
                        <div>
                            <Image
                                src="/web/tanuki/item-1.webp"
                                width={300}
                                height={200}
                            />
                        </div>
                        <div>
                            <Image
                                src="/web/tanuki/item-1.webp"
                                width={300}
                                height={200}
                            />
                        </div>
                    </Slider>
                </div>
            </div>
        </section>
    );
};

export default Portafolio2;
