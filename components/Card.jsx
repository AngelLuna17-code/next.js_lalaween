"use client";
import React, { useState } from 'react';
import Link from 'next/link';

const Card = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <section className='py-[50px]'>
      <div className='container mx-auto bg-white'>
        <div className={`card mx-auto ${isFlipped ? 'flipped' : ''}`} onClick={handleCardClick}>
          <div className="card-inner">
            {/* Front */}
            <div className="card-front rounded-[15px] flex items-center justify-center" style={{ background: 'rgba(0, 0, 0, 0.7)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' }}>
              <div>
                {/* titulo */}
                <div className='text-center'>
                  <h3 className='text-[#00a09b] font-black text-[23px] typing'>
                    Paquete
                  </h3>
                  <p>
                    Ante la duda
                  </p>
                </div>
                {/* titulo */}
                {/* Precio */}
                <div className='text-center text-white mt-5 typing font-thin'>
                  <div>
                    <p className='line-through'>COSTO REAL</p>
                    <p className='line-through'>precio antes</p>
                    <p className='text-[#00a09b]'>COSTO PROMOCIONAL</p>
                    <p>precio ahora</p>
                  </div>
                </div>
                {/* Precio */}
              </div>
            </div>
            {/* Front */}
            {/* Back */}
            <div className="card-back rounded-[15px] flex items-center justify-center p-3" style={{ background: 'rgba(0, 0, 0, 0.7)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' }}>
              <div>
                <p className='text-[#00a09b] typing text-xl'>
                  Proposito
                </p>
                <p>
                  Diseñar para comunicar de manera efectiva la personalidad, esencia e identidad de tu marca.
                  Para generar un lanzamiento positivo desde la creación de su logotipo y a través de campañas publicitarias
                  en redes sociales e impresos con diseños óptimos y atractivos para el nicho de mercado al que su negocio
                  desee llegar, sin perder su autenticidad.
                </p>
                {/* Button */}
                <div className='flex justify-center mt-5'>
                  <Link href="/">
                    <button className='px-[15px] py-[10px] bg-[#006d6a] hover:bg-[#005351] font-bold rounded-[10px]'>
                      Más información
                    </button>
                  </Link>
                </div>
                {/* Button */}
              </div>
            </div>
            {/* Back */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card;
