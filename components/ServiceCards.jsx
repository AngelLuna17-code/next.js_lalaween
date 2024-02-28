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
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <section>
            <div className='container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-5'>
                {list.map((item, index) => (
                    <div className="rounded-[15px]" key={index} style={{ backgroundColor: item.bgColor }}>
                        <div className='text-center p-5'>
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

                        {/* Botón para abrir el modal */}
                        <div>
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                onClick={() => handleOpenModal(index)}>
                                Abrir modal
                            </button>
                        </div>
                        {/* Botón para abrir el modal */}
                        {/* Modal */}
                        {openModalIndex === index && (
                            <div className="modal-overlay z-10 fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
                                <div className="modal bg-black p-8 rounded-[15px] min-w-[900px] w-[1300px]" style={{ background: 'rgba(0, 0, 0, 0.7)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' }}>
                                    {/* header del modal */}
                                    <div>
                                        <div>
                                            <p className='title text-2xl'>
                                                {item.title}
                                            </p>
                                        </div>
                                    </div>
                                    {/* header del modal */}
                                    {/* Botón para cerrar el modal */}
                                    <button
                                        className="close-btn absolute top-0 right-0 text-white bg-transparent border-none cursor-pointer"
                                        onClick={handleCloseModal}>
                                        X
                                    </button>
                                    {/* Botón para cerrar el modal */}
                                    {/* Contenido del modal */}
                                    <div>
                                        <Slider {...settings}>
                                            {item.images.map((image, index) => (
                                                <div key={index}>
                                                    <Image
                                                        src={image}
                                                        height={100}
                                                        width={100}
                                                        alt='Servicios'
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
                                            <div className='mt-8'>
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
                    </div>
                ))}
            </div>
        </section>
    );
}

export default ServiceCards;
