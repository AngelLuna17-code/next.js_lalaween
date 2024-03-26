"use client";
import React, { useState } from 'react';
import Link from 'next/link';

const Card = () => {
  const [cards, setCards] = useState([
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
      buttonLink: "/"
      /* Back Card */
    },
    {
      id: 2,
      title: "Paquete 2",
      description: "Descripción del paquete 2",
      proposito: "",
      oldPrice: "",
      newPrice: "",

      buttonLink: "/"
    },
    // Puedes agregar más objetos para más tarjetas
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
          <div key={card.id} className={`card mx-auto ${isFlipped[index] ? 'flipped' : ''}`} onClick={() => handleCardClick(index)}>
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
                    <div>
                      <p className='line-through'>COSTO REAL</p>
                      <p className='line-through'>{card.oldPrice}</p>
                      <p className='text-[#00a09b]'>COSTO PROMOCIONAL</p>
                      <p>{card.newPrice}</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Front */}
              {/* Back */}
              <div className="card-back rounded-[15px] flex items-center justify-center p-3" style={{ background: 'rgba(0, 0, 0, 0.7)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' }}>
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
