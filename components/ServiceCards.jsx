'use client';
import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CardAnimatedText from '../components/CardAnimatedText';
import Image from 'next/image';

function ImageSlider({ images }) {
    const sliderSettings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <Slider {...sliderSettings}>
            {images.map((image, index) => (
                <div key={index}>
                    <Image
                        className=' object-contain mx-auto'
                        height={0}
                        width={300}
                        src={image}
                        alt={`slider-${index}`}
                        loading="lazy"
                    />
                </div>
            ))}
        </Slider>
    );
}

function ServiceCards() {
    const [showModal, setShowModal] = useState(false);
    const [sliderImages, setSliderImages] = useState([]);
    const [selectedImageIndex, setSelectedImageIndex] = useState(null);

    const openModal = (images, index) => {
        setSliderImages(images);
        setSelectedImageIndex(index);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setSelectedImageIndex(null);
    };

    const list = [
        {
            title: "DISEÑO DE MARCA",
            icon: [
                "/icons/LalaWeen-WEB-08.webp",
            ],
            sub: "Abarcamos el branding y la identidad corporativa de tu marca.",
            text: "Englobando una serie de elementos clave como la creación de su logotipo, desde su tipografía, figura, estilo y pantones que le brinden una esencia visual distintiva.",
            images: [
                "/DISEÑO DE MARCA/Mock up Tarjeta Estudio Arq Logotipo.webp",
                "/DISEÑO DE MARCA/Mock up Etiqueta Tanukiya_11zon_11zon.webp",
                "/DISEÑO DE MARCA/Mock up Gorra MJ.webp",
                "/DISEÑO DE MARCA/Mock up Hoja reciclada.webp",
                "/DISEÑO DE MARCA/Mock up Oficina-min.webp"
            ],
            bgColor: "rgba(0, 0, 0, 0.7)",
        },
        {
            title: "IDENTIDAD GRAFICA",
            icon: [
                "/icons/LalaWeen-WEB-09_1.webp",
            ],
            sub: "Diseñamos y definimos el aspecto visual de una marca.",
            text: "En base al logotipo, misión, visión y objetivo de la empresa, se realiza el diseño adecuado para impreso o digital de una manera que sea fácil de identificar para el espectador y logre relacionarlo con la marca.",
            images: [
                "/IDENTIDAD GRÁFICA/Mock up Branding_3_11zon.webp",
                "/IDENTIDAD GRÁFICA/Mock up hoja grabada_5_11zon.webp",
                "/IDENTIDAD GRÁFICA/Mock up Receta SoyTotalmenteKeto_6_11zon.webp",
                "/IDENTIDAD GRÁFICA/Mock up Tarjeta de presentación A_7.webp",
                "/IDENTIDAD GRÁFICA/Mock up Tarjeta de presentación B_8.webp",
                "/IDENTIDAD GRÁFICA/Mock up Tarjeta de presentación D_9.webp",
                "/IDENTIDAD GRÁFICA/Mouckup Triptico pizzopolis_10_11zon.webp",
                "/IDENTIDAD GRÁFICA/Mock up Bolsa de paja_1_11zon.webp",
                "/IDENTIDAD GRÁFICA/Mock up Bolsa de papel ConCafé_2.webp",
                "/IDENTIDAD GRÁFICA/Mock up caja_4_11zon.webp"
            ],
            bgColor: "rgba(0, 0, 0, 0.7)",
        },
        {
            title: "REDES SOCIALES Y DISEÑO WEB",
            icon: [
                "/icons/LalaWeen-WEB-10.webp",
            ],
            text: "Identificación del público objetivo, creación de contenido en redes sociales para construir relaciones sólidas, y facilitación de adquisiciones a través de una página web atractiva y amigable.",
            images: [
                "/REDES Y WEB/Mock up Tablet_4_11zon.webp",
                "/REDES Y WEB/Mock up Redes Sociales Dr José_1.webp",
                "/REDES Y WEB/Mock up Redes Sociales Dra Jaz_2_11zon.webp",
                "/REDES Y WEB/Mock up Redes Sociales Dra Marcela_3_11zon.webp",
                "/REDES Y WEB/Mock up Tablet1_5_11zon.webp",
                "/REDES Y WEB/Mock up WEB_6_11zon.webp",
            ],
            bgColor: "rgba(0, 0, 0, 0.7)",
        },
    ];

    return (
        <div className='container mx-auto  px-[15px] py-[50px] 2xl:px-0'>
            <div className='flex items-center justify-around'>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 md:gap.8 overflow-hidden'>
                    {list.map((slide, index) => (
                        <div key={index} className='sm:w-[80%] lg:w-full mx-auto rounded-t-[15px] rounded-b-[15px] text-white text-center' style={{ background: slide.bgColor, backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' }}>
                            <div className='h-[355px] px-5 flex items-center justify-center'>
                                <div>
                                    <div>
                                        <p className='title text-2xl'>
                                            {slide.title}
                                        </p>
                                    </div>
                                    <div className='mt-3'>
                                        <Image
                                            className='mx-auto'
                                            height={0}
                                            width={100}
                                            src={slide.icon[0]}
                                            alt="diseño"
                                            loading="lazy"
                                        />
                                    </div>
                                    <div className='mt-3'>
                                        {index === 2 && (
                                            <CardAnimatedText />
                                        )}
                                    </div>
                                    <div>
                                    </div>
                                    <div className='mt-3'>
                                        <p className='font-black'>
                                            {slide.sub}
                                        </p>
                                    </div>
                                    <div className='mt-3'>
                                        <p>
                                            {slide.text}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='relative cursor-pointer' onClick={() => openModal(slide.images, index)}>
                                <Image
                                    className='rounded-b-[15px]'
                                    height={0}
                                    width={500}
                                    src={`/cards/card-${index + 1}.webp`}
                                    alt="servicios"
                                    loading="lazy"
                                />
                                <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" fill="currentColor" class="bi bi-hand-index-thumb-fill" viewBox="0 0 16 16">
                                        <path d="M8.5 1.75v2.716l.047-.002c.312-.012.742-.016 1.051.046.28.056.543.18.738.288.273.152.456.385.56.642l.132-.012c.312-.024.794-.038 1.158.108.37.148.689.487.88.716q.113.137.195.248h.582a2 2 0 0 1 1.99 2.199l-.272 2.715a3.5 3.5 0 0 1-.444 1.389l-1.395 2.441A1.5 1.5 0 0 1 12.42 16H6.118a1.5 1.5 0 0 1-1.342-.83l-1.215-2.43L1.07 8.589a1.517 1.517 0 0 1 2.373-1.852L5 8.293V1.75a1.75 1.75 0 0 1 3.5 0" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {showModal && (
                <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none" onClick={closeModal}>
                    <div className="relative my-6 mx-auto w-[95%] md:w-[80%] xl:w-[65%] 2xl:w-[55%]" onClick={(e) => e.stopPropagation()}>
                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-[#0b0b0b] outline-none focus:outline-none">
                            <div className="flex items-start justify-between p-0 md:p-5 border-b border-solid border-blueGray-200 rounded-t">
                                <h3 className="text-2xl font-semibold text-white">
                                    Lalaween Creative Team
                                </h3>
                                <button
                                    className="p-1 ml-auto bg-transparent border-0 text-white opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                    onClick={closeModal}
                                >
                                    <span className="bg-transparent text-white opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                        ×
                                    </span>
                                </button>
                            </div>
                            <div className='mx-auto py-[10px] w-[80%]'>
                                <ImageSlider images={sliderImages} />
                            </div>
                            <div className="flex items-center justify-end p-0 md:p-6 border-t border-solid border-blueGray-200 rounded-b">
                                <button
                                    className="text-white background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="button"
                                    onClick={closeModal}
                                >
                                    Cerrar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ServiceCards;
