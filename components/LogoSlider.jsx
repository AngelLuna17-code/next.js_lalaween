"use client";
import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';

const LogoSlider = () => {
  const images = [
    '/logos/item-1.webp',
    '/logos/item-2.webp',
    '/logos/item-3.webp',
    '/logos/item-4.webp',
    '/logos/item-5.webp',
    '/logos/item-6.webp',
    '/logos/item-7.webp',
    '/logos/item-8.webp',
    '/logos/item-9.webp',
    '/logos/item-10.webp',
    '/logos/item-11.webp',
    '/logos/item-12.webp',
    '/logos/item-13.webp',
    '/logos/item-14.webp',
    '/logos/item-15.webp',
    '/logos/item-16.webp'
  ];

  const sliderRef = useRef();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
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
    <section className='px-[15px] py-[50px]'>
      <div className='container mx-auto'>
        <Slider
          className='slider w-[85%] sm:w-[90%] md:w-[93%] lg:w-[95%] mx-auto'
          ref={sliderRef}
          {...settings}>
          {images.map((image, index) => (
            <div key={index} style={{ height: '300px' }}>
              <div className='bg-[#e7e4e9] mx-[5px] sm:mx-[30px] md:mx-[5px] rounded-[15px] py-5'>
                <Image
                  className='h-[100px] w-auto object-contain mx-auto'
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
    </section>
  );
};

export default LogoSlider;
