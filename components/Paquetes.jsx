"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Paquetes = () => {
  const [cards, setCards] = useState([
    {
      id: 1,
      title: "Pa' que le emprendas",
      description: "En sus marcas, listos... ¡¡Fuera!!",
      oldPrice: "$8,100.00 + IVA",
      newPrice: "$3,500.00 + IVA",
      proposito: "Diseñar para comunicar de manera efectiva la personalidad, esencia e identidad de tu marca. Para generar un lanzamiento positivo desde la creación de su logotipo y a través de campañas publicitarias en redes sociales e impresos con diseños óptimos y atractivos para el nicho de mercado al que su negocio desee llegar, sin perder su autenticidad.",
      buttonLink: "/Paquete1"
    },
    {
      id: 2,
      title: "Pa' queten bien informados",
      description: "Ante una incognita se la solución",
      oldPrice: "$5,800.00 + IVA * Mes",
      newPrice: "3,780.00 + IVA * Mes",
      proposito: "Diseñar y ejecutar de manera efectiva campañas publicitarias e informativas sin que la marca pierda su esencia y autenticidad, a través de un lanzamiento positivo en redes sociales con diseños óptimos y atractivos para el nicho de mercado al que su negocio desee llegar",
      buttonLink: "/Paquete2"
    },
    {
      id: 3,
      title: "Pa' quete encuentren siempre",
      description: "Ante la duda una solución",
      oldPrice: "$26,950.00 + IVA * Mes",
      newPrice: "$15,950.00 + IVA * Mes",
      proposito: "Mejorar la experiencia de sus usuarios y lograr un mayor alcance, con un máximo nivel de exposición posible para cumplir satisfactoriamente las necesidades de su nicho; conservando la autenticidad y personalidad de su marca, a través de un lanzamiento activo en redes sociales e implementación de su página web.",
      buttonLink: "/Paquete3"
    },
    {
      id: 4,
      title: "Pa' que economices",
      description: "Inicia tu presencia en redes sociales y crece tu negocio",
      oldPrice: "$5,250.00 + IVA * Mes",
      newPrice: "$2,625.00 + IVA * Mes",
      proposito: "Porque sabemos que vas empezando, pero el diseño no es lo tuyo o no tienes tiempo de crear contenido, con esto buscamos crear diseños atractivos y funcionales que le den el toque profesional a las redes sociales de tu negocio",
      buttonLink: "/Paquete4"
    },
    {
      id: 5,
      title: "Pa' quete des a conocer",
      description: "Inicia tu presencia en redes sociales y crece tu negocio",
      proposito: "Diseñar, generar y ejecutar las bases para comenzar a promocionar tus servicios y/o productos en el mercado, estudiando y planteando estrategias según el análisis obtenido en redes sociales, dando a conocer y dejando al alcance de todos la comunicación directa y fluida con tu negocio en el mundo digita",
      buttonLink: "/Paquete5"
    },
  ]);

  const [isFlipped, setIsFlipped] = useState([]);

  const handleButtonClick = (index) => {
    const newFlippedState = [...isFlipped];
    newFlippedState[index] = !newFlippedState[index];
    setIsFlipped(newFlippedState);
  };

  const settings = {
    dots: false,
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
    <section className='px-[15px] py-[200px] 2xl:py-[250px]'>
      <div className='container mx-auto'>
        <Slider className='w-[85%] lg:w-[95%] mx-auto' {...settings}>
          {cards.map((card, index) => (
            <div key={card.id} className={`card mx-auto ${isFlipped[index] ? 'flipped' : ''}`}>
              <div className="card-inner">
                <div className="card-front rounded-[15px] p-2 flex items-center justify-center" style={{ background: 'rgba(0, 0, 0, 0.7)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' }}>
                  <div>
                    <div className='text-center'>
                      <h3 className='text-[#00a09b] font-black text-[23px] typing'>
                        {card.title}
                      </h3>
                      <p>
                        {card.description}
                      </p>
                    </div>
                    <div className='text-center text-white mt-5 typing font-thin'>
                      {card.id !== 5 && (
                        <div className='precio'>
                          <p className='line-through'>COSTO REAL</p>
                          <p className='line-through'>{card.oldPrice}</p>
                          <p className='text-[#00a09b]'>COSTO PROMOCIONAL</p>
                          <p>{card.newPrice}</p>
                        </div>
                      )}
                    </div>
                    <div className='flex justify-center'>
                      <button className="flip-button mt-5 px-[15px] py-[10px] bg-[#006d6a] hover:bg-[#005351] font-bold rounded-[10px]" onClick={() => handleButtonClick(index)}>
                        Más información
                      </button>
                    </div>
                  </div>
                </div>
                <div className="card-back rounded-[15px] flex items-center justify-center p-3 lg:p-5" style={{ background: 'rgba(0, 0, 0, 0.7)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' }}>
                  <div>
                    <div className='overflow-'>
                      <p className='text-[#00a09b] typing text-xl'>
                        Propósito
                      </p>
                      <p>
                        {card.proposito}
                      </p>
                    </div>
                    <div className='flex justify-center mt-5'>
                      <Link href={card.buttonLink}>
                        <button className='px-[15px] py-[10px] bg-[#006d6a] hover:bg-[#005351] font-bold rounded-[10px]'>
                          Ver paquete
                        </button>
                      </Link>
                    </div>
                    <div className='text-right'>
                      <button className="flip-button mt-5" onClick={() => handleButtonClick(index)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" viewBox="0 0 16 16">
                          <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Paquetes;
