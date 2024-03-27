"use client";
import React, { useState } from 'react';
import Link from 'next/link';

const Card = () => {
  const [cards, setCards] = useState([
    /* Pa' que le emprendas */
    {
      id: 1,
      /* Front Card */
      title: "Pa' que le emprendas",
      description: "En sus marcas, listos... ¡¡Fuera!!",
      oldPrice: "$8,100.00 + IVA",
      newPrice: "$3,500.00 + IVA",
      /* Front Card */
      /* Back Card */
      proposito: "Diseñar para comunicar de manera efectiva la personalidad, esencia e identidad de tu marca. Para generar un lanzamiento positivo desde la creación de su logotipo y a través de campañas publicitarias en redes sociales e impresos con diseños óptimos y atractivos para el nicho de mercado al que su negocio desee llegar, sin perder su autenticidad.",
      buttonLink: "/Paquete1"
      /* Back Card */
    },
    /* Pa' que le emprendas */
    /* Pa' queten bien informados */
    {
      id: 2,
      /* Front Card */
      title: "Pa' queten bien informados",
      description: "Ante una incognita se la solución",
      oldPrice: "$5,800.00 + IVA * Mes",
      newPrice: "3,780.00 + IVA * Mes",
      /* Front Card */
      /* Back Card */
      proposito: "Diseñar y ejecutar de manera efectiva campañas publicitarias e informativas sin que la marca pierda su esencia y autenticidad, a través de un lanzamiento positivo en redes sociales con diseños óptimos y atractivos para el nicho de mercado al que su negocio desee llegar",
      buttonLink: "/Paquete2"
      /* Back Card */
    },
    /* Pa' queten bien informados */
    /* Pa' quete encuentren siempre */
    {
      id: 3,
      /* Front Card */
      title: "Pa' quete encuentren siempre",
      description: "Ante la duda una solución",
      oldPrice: "$26,950.00 + IVA * Mes",
      newPrice: "$15,950.00 + IVA * Mes",
      /* Front Card */
      /* Back Card */
      proposito: "Mejorar la experiencia de sus usuarios y lograr un mayor alcance, con un máximo nivel de exposición posible para cumplir satisfactoriamente las necesidades de su nicho; conservando la autenticidad y personalidad de su marca, a través de un lanzamiento activo en redes sociales e implementación de su página web.",
      buttonLink: "/Paquete3"
      /* Back Card */
    },
    /* Pa' quete encuentren siempre */
    /* Pa' que economices */
    {
      id: 4,
      /* Front Card */
      title: "Pa' que economices",
      description: "Inicia tu presencia en redes sociales y crece tu negocio",
      oldPrice: "$5,250.00 + IVA * Mes",
      newPrice: "$2,625.00 + IVA * Mes",
      /* Front Card */
      /* Back Card */
      proposito: "Porque sabemos que vas empezando, pero el diseño no es lo tuyo o no tienes tiempo de crear contenido, con esto buscamos crear diseños atractivos y funcionales que le den el toque profesional a las redes sociales de tu negocio",
      buttonLink: "/Paquete4"
      /* Back Card */
    },
    /* Pa' que economices */
    /* Pa' quete des a conocer */
    {
      id: 5,
      /* Front Card */
      title: "Pa' que economices",
      description: "Inicia tu presencia en redes sociales y crece tu negocio",
      /* Front Card */
      /* Back Card */
      proposito: "Diseñar, generar y ejecutar las bases para comenzar a promocionar tus servicios y/o productos en el mercado, estudiando y planteando estrategias según el análisis obtenido en redes sociales, dando a conocer y dejando al alcance de todos la comunicación directa y fluida con tu negocio en el mundo digita",
      buttonLink: "/Paquete5"
      /* Back Card */
    },
    /* Pa' quete des a conocer */
  ]);

  const [isFlipped, setIsFlipped] = useState([]);

  const handleCardClick = (index) => {
    const newFlippedState = [...isFlipped];
    newFlippedState[index] = !newFlippedState[index];
    setIsFlipped(newFlippedState);
  };

  return (
    <section className='py-[50px] px-[15px]'>
      <div className='container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-5'>
        {cards.map((card, index) => (
          <div key={card.id} className={`card mx-auto cursor-pointer ${isFlipped[index] ? 'flipped' : ''}`} onClick={() => handleCardClick(index)}>
            <div className="card-inner">
              {/* Front */}
              <div className="card-front rounded-[15px] flex items-center justify-center" style={{ background: 'rgba(0, 0, 0, 0.7)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' }}>
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
                </div>
              </div>
              {/* Front */}
              {/* Back */}
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
                        Más información
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              {/* Back */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Card;
