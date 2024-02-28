'use client';
import React, { useState } from 'react';
import Image from 'next/image';

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

    return (
        <section>
            <div className='container mx-auto grid grid-cols-1 lg:grid-cols-3'>
                {list.map((item, index) => (
                    <div className="card" key={index} style={{ backgroundColor: item.bgColor }}>
                        <h2>{item.title}</h2>
                        <img src={item.icon} alt="Icono" />
                        <p>{item.sub}</p>
                        <p>{item.text}</p>
                        {/* Botón para abrir el modal */}
                        <div>
                            <button
                                onClick={() => handleOpenModal(index)}>
                                Abrir modal
                            </button>
                        </div>
                        {/* Botón para abrir el modal */}
                        {/* Modal */}
                        {openModalIndex === index && (
                            <div className="modal-overlay z-10" style={{ background: 'rgba(0, 0, 0, 0.7)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' }}>
                                <div className="modal bg-black">
                                    {/* header del modal */}
                                    <div>
                                        <h2>{item.title}</h2>
                                    </div>
                                    {/* header del modal */}
                                    {/* Botón para cerrar el modal */}
                                    <button
                                        className="close-btn"
                                        onClick={handleCloseModal}>
                                        X
                                    </button>
                                    {/* Botón para cerrar el modal */}
                                    {/* Contenido del modal */}
                                    <div>
                                        <p>Contenido del modal</p>
                                    </div>
                                    {/* Contenido del modal */}
                                    {/* footer del modal */}
                                    <div>
                                        {/* Botón para cerrar el modal */}
                                        <div>
                                            <button
                                                className="close-modal-btn"
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
                        {/* Aquí puedes hacer un bucle para mostrar las imágenes */}
                        {item.images.map((image, index) => (
                            <Image
                                key={index}
                                src={image}
                                height={100}
                                width={100}
                                alt='Servicios'
                            />
                        ))}
                    </div>
                ))}
            </div>
        </section>
    );
}

export default ServiceCards;