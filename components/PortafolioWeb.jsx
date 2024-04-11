"use client";
import React, { useRef, useState, useEffect } from 'react';
import Slider from 'react-slick';
import Image from 'next/image';

const PortafolioWeb = () => {
    const images = [
        [
            '/web/tanukiya.webp',
            '/web/tanukiya2.webp',
            '/web/tanukiya3.webp'
        ],
        [
            "/web/garay.webp",
            "/web/garay2.webp",
            "/web/garay3.webp"
        ],
        [
            "/web/lalaween/lalaween.webp",
            "/web/lalaween/1.png",
            "/web/lalaween/2.png"
        ]
    ];

    const sliderRef = useRef();
    const [openModalIndex, setOpenModalIndex] = useState(null);

    useEffect(() => {
        const handleEsc = (event) => {
            if (event.keyCode === 27) {
                handleCloseModal();
            }
        };

        window.addEventListener('keydown', handleEsc);

        return () => {
            window.removeEventListener('keydown', handleEsc);
        };
    }, []);

    const handleOpenModal = (index) => {
        setOpenModalIndex(index);
    };

    const handleCloseModal = () => {
        setOpenModalIndex(null);
    };

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
        <section className='px-[15px] py-[50px]'>
            <div className='container mx-auto grid grid-cols-1 lg:grid-cols-2'>
                <div className='flex items-center justify-center'>
                    <div>
                        <h2 className='text-white text-center text-[25px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl-[44px] 2xl:text-[48px] title-container '>
                            Nuestro
                            <br />
                            <span className='text-white text-center text-[25px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl-[44px] 2xl:text-[48px] title-container title'>
                                portafolio web
                            </span>
                        </h2>
                    </div>
                </div>
                <div>
                    <Slider
                        className='slider w-[85%] sm:w-[90%] md:w-[93%] lg:w-[95%] mx-auto'
                        ref={sliderRef}
                        {...settings}>
                        {images.map((imageSet, index) => (
                            <div key={index}>
                                <div className='relative cursor-pointer' onClick={() => handleOpenModal(index)}>
                                    <Image
                                        className='mx-auto rounded-[15px]'
                                        height={1000}
                                        width={1000}
                                        src={imageSet[0]}
                                        alt={`Image ${index + 1}`}
                                        sizes="100vw"
                                        loading='lazy'
                                    />
                                    <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" fill="currentColor" class="bi bi-hand-index-thumb-fill" viewBox="0 0 16 16">
                                            <path d="M8.5 1.75v2.716l.047-.002c.312-.012.742-.016 1.051.046.28.056.543.18.738.288.273.152.456.385.56.642l.132-.012c.312-.024.794-.038 1.158.108.37.148.689.487.88.716q.113.137.195.248h.582a2 2 0 0 1 1.99 2.199l-.272 2.715a3.5 3.5 0 0 1-.444 1.389l-1.395 2.441A1.5 1.5 0 0 1 12.42 16H6.118a1.5 1.5 0 0 1-1.342-.83l-1.215-2.43L1.07 8.589a1.517 1.517 0 0 1 2.373-1.852L5 8.293V1.75a1.75 1.75 0 0 1 3.5 0" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>

            {/* Modal */}
            {openModalIndex !== null && (
                <div className="modal-overlay z-10 fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="modal bg-black rounded-[15px] w-[360px] sm:w-[600px] md:w-[720px] lg:w-[1000px] xl:w-[1200px] 2xl:w-[1300px]" style={{ background: 'rgba(0, 0, 0, 0.7)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' }}>
                        {/* header del modal */}
                        <div className='p-5' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                            <div>
                                <p className='title text-2xl'>
                                    Image {openModalIndex + 1}
                                </p>
                            </div>
                            {/* Botón para cerrar el modal */}
                            <button
                                className="text-white bg-transparent border-none cursor-pointer"
                                onClick={handleCloseModal}
                                style={{ marginTop: '0' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                                </svg>
                            </button>
                            {/* Botón para cerrar el modal */}
                        </div>
                        {/* header del modal */}
                        {/* Contenido del modal */}
                        <div>
                            <Slider className='w-[75%] mx-auto' {...settings}>
                                {images[openModalIndex].map((image, index) => (
                                    <div key={index}>
                                        <Image
                                            className='mx-auto rounded-[15px]'
                                            height={1000}
                                            width={1000}
                                            src={image}
                                            alt={`Image ${index + 1}`}
                                            sizes="100vw"
                                            loading='lazy'
                                        />
                                    </div>
                                ))}
                            </Slider>
                        </div>
                        {/* Contenido del modal */}
                        {/* footer del modal */}
                        <div className='p-5'>
                            {/* Botón para cerrar el modal */}
                            <div className='flex justify-end'>
                                <button
                                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                                    onClick={handleCloseModal}>
                                    Cerrar
                                </button>
                            </div>
                            {/* Botón para cerrar el modal */}
                        </div>
                        {/* footer del modal */}
                    </div>
                </div>
            )}
            {/* Modal */}
        </section>
    );
};

export default PortafolioWeb;