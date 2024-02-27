'use client';
import React from 'react';
import Link from 'next/link';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Paquetes = () => {
    const modals = [
        /* Pa' que le emprendas */
        {
            titlePaq: "Pa' que le emprendas",
            sub: "En sus marcas, listos... ¡¡Fuera!!",
            oldPrice: "$8,100.00 + IVA",
            newPrice: "$3,500.00 + IVA",
        },
        /* Pa' que le emprendas */
        /* Pa' queten bien informados */
        {
            titlePaq: "Pa' queten bien informados",
            sub: "Ante una incognita se la solución",
            oldPrice: "$5,800.00 + IVA * Mes",
            newPrice: "$3,780.00 + IVA * Mes",
        },
        /* Pa' queten bien informados */
        /* Pa' quete encuentren siempre */
        {
            titlePaq: "Pa' quete encuentren siempre",
            sub: "Ante la duda una solución",
            oldPrice: "$26,950.00 + IVA * Mes",
            newPrice: "$15,950.00 + IVA * Mes",
        },
        /* Pa' quete encuentren siempre */
        /* Pa' que economices */
        {
            titlePaq: "Pa' que economices",
            sub: "Inicia tu presencia en redes sociales y crece tu negocio",
            oldPrice: "$5,250.00 + IVA * Mes",
            newPrice: "$2,625.00 + IVA * Mes",
        },
        /* Pa' que economices */
        /* Pa' quete des a conocer */
        {
            titlePaq: "Pa' quete des a conocer",
            sub: "Inicia tu presencia en redes sociales y crece tu negocio",
        }
        /* Pa' quete des a conocer */
    ];

    const routes = [
        "/Paquete1",
        "/Paquete2",
        "/Paquete3",
        "/Paquete4",
        "/Paquete5"
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '60px',
        responsive: [
            {
                breakpoint: 1280, // xl breakpoint
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    centerPadding: '60px',
                },
            },
            {
                breakpoint: 1024, // lg breakpoint
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    centerPadding: '30px',
                },
            },
            {
                breakpoint: 768, // md breakpoint
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerPadding: '120px',
                },
            },
            {
                breakpoint: 640, // sm breakpoint
                settings: {
                    slidesToShow: 1,
                    centerPadding: '60px',
                },
            },
            {
                breakpoint: 360, // xs breakpoint
                settings: {
                    slidesToShow: 1,
                    centerPadding: '0px',
                },
            },
        ],
    };

    return (
        <section>
            <div className='container mx-auto pt-[50px] pb-[140px] xl:pt-[175px] xl:pb-[175px] px-[10px]'>
                <Slider className='w-[85%] lg:w-[95%] mx-auto' {...settings}>
                    {modals.map((modal, index) => (
                        <div key={index}>
                            {/* Card */}
                            <div className='h-[340px] lg:h-[360px] overflow-hidden p-5 lg:p-2 rounded-lg flex items-center justify-center' style={{ background: 'rgba(0, 0, 0, 0.7)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)', margin: '0 10px' }}>
                                <div>
                                    {/* titulo */}
                                    <div className='text-center'>
                                        <h3 className='text-[#00a09b] font-black text-[23px] typing'>
                                            {modal.titlePaq}
                                        </h3>
                                        <p>
                                            {modal.sub}
                                        </p>
                                    </div>
                                    {/* titulo */}
                                    {/* Button */}
                                    <div className='flex justify-center mt-5'>
                                        <Link href={routes[index]}>
                                            <button className='px-[15px] py-[10px] bg-[#006d6a] hover:bg-[#005351] font-bold rounded-[10px]'>
                                                Más información
                                            </button>
                                        </Link>
                                    </div>
                                    {/* Button */}
                                    {/* Precio */}
                                    <div className='text-center text-white mt-5 typing font-thin'>
                                        {modal.oldPrice && (
                                            <div>
                                                <p className='line-through'>COSTO REAL</p>
                                                <p className='line-through'>{modal.oldPrice}</p>
                                                <p className='text-[#00a09b]'>COSTO PROMOCIONAL</p>
                                                <p>{modal.newPrice}</p>
                                            </div>
                                        )}
                                    </div>
                                    {/* Precio */}
                                </div>
                            </div>
                            {/* Card */}
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default Paquetes;
