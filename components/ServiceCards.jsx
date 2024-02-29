'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CardAnimatedText from './CardAnimatedText';

const ServiceCards = () => {
    const [openModalIndex, setOpenModalIndex] = useState(null);

    const handleOpenModal = (index) => {
        setOpenModalIndex(index);
    };

    const handleCloseModal = () => {
        setOpenModalIndex(null);
    };

    const list = [
        {
            title: "DISEÑO DE MARCA",
            icon: "/icons/LalaWeen-WEB-08.webp",
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
            icon: "/icons/LalaWeen-WEB-09_1.webp",
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
            icon: "/icons/LalaWeen-WEB-10.webp",
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

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <section>
            <div className='container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-5 py-[50px] lg:py-[100px] px-[15px]'>
                {/* Cards */}
                {list.map((item, index) => (
                    <div className="rounded-[15px]" key={index} style={{ backgroundColor: item.bgColor }}>
                        <div className='text-center h-[400px] p-4 flex items-center overflow-hidden'>
                            <div>
                                <p className='title text-2xl'>
                                    {item.title}
                                </p>
                                <Image
                                    className='mx-auto mt-3'
                                    height={100}
                                    width={100}
                                    src={item.icon}
                                    alt={item.title}
                                    loading="lazy"
                                />
                                <div className='mt-3'>
                                    {index === 2 && (
                                        <CardAnimatedText />
                                    )}
                                </div>
                                <p className='font-black mt-3'>
                                    {item.sub}
                                </p>
                                <p className='mt-3'>
                                    {item.text}
                                </p>
                            </div>
                        </div>
                        {/* abrir modal */}
                        <div className='relative cursor-pointer' onClick={() => handleOpenModal(index)}>
                            <Image
                                className='rounded-b-[15px]'
                                height={0}
                                width={750}
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
                        {/* abrir modal */}
                    </div>
                ))}
                {/* Cards */}
            </div>

            {/* Modal */}
            {openModalIndex !== null && (
                <div className="modal-overlay z-10 fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="modal bg-black rounded-[15px] w-[360px] xl:w-[1300px]" style={{ background: 'rgba(0, 0, 0, 0.7)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' }}>
                        {/* header del modal */}
                        <div className='p-5' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                            <div>
                                <p className='title text-2xl'>
                                    {list[openModalIndex].title}
                                </p>
                            </div>
                            {/* Botón para cerrar el modal */}
                            <button
                                className="text-white bg-transparent border-none cursor-pointer"
                                onClick={handleCloseModal}
                                style={{ marginTop: '0' }}>
                                X
                            </button>
                            {/* Botón para cerrar el modal */}
                        </div>
                        {/* header del modal */}
                        {/* Contenido del modal */}
                        <div>
                            <Slider className='w-[75%] mx-auto' {...settings}>
                                {list[openModalIndex].images.map((image, index) => (
                                    <div key={index}>
                                        <img
                                            className='w-auto h-[400px] object-contain mx-auto'
                                            src={image}
                                            alt={`slider-${index}`}
                                            loading="lazy"
                                        />
                                    </div>
                                ))}
                            </Slider>
                        </div>
                        {/* Contenido del modal */}
                        {/* footer del modal */}
                        <div>
                            {/* Botón para cerrar el modal */}
                            <div>
                                <div className=''>
                                    <button
                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                        onClick={handleCloseModal}>
                                        Cerrar
                                    </button>
                                </div>
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
}

export default ServiceCards;