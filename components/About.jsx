"use client";
import React, { useState } from 'react';
import Image from 'next/image';

const About = () => {
    const [clickCount, setClickCount] = useState(0);

    // Función para manejar los clics en la imagen
    const handleClick = () => {
        // Incrementa el número de clics en 1 cada vez que se hace clic
        setClickCount(prevCount => prevCount + 1);

        // Si el número de clics es par, reproduce el audio
        if (clickCount % 1 === 0) {
            const audio = new Audio('cat.mp3');
            audio.play();
        } else {
            // Si el número de clics es impar y hay un audio en reproducción, páralo
            const audio = document.querySelector("audio");
            if (audio) {
                audio.pause();
                audio.currentTime = 0;
            }
        }
    };

    return (
        <section className='py-[50px] px-[15px]'>
            <div id="about" className='container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5'>
                <div className='flex items-center justify-center'>
                    <div className='text-white'>
                        <h2 className='text-white text-center text-[25px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl-[44px] 2xl:text-[48px] title-container '>
                            ¿Como nació
                            <br className='mt-3' />
                            <span className='text-white text-center text-[25px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl-[44px] 2xl:text-[48px] title-container title'>
                                Lalaween
                            </span>
                            ?
                        </h2>
                        <div className='mt-4'>
                            <p>
                                LalaWeen Creative Team, nación el 31 de Octubre del 2020; sin embargo, fue un proyecto
                                que comenzó en el año 2017, como un trabajo solitario, pero enriquecedor como diseñadora freelancer.
                            </p>
                            <p className='mt-3'>
                                Debido a que, por falta de oportunidades laborales de su área, en su ciudad natal, Tepic,
                                Nayarit, busco el aprendizaje y retos más grandes en agencias de publicidad en Guadalajara, llevándola lejos de casa y su apreciado Rony.
                            </p>
                            <p className='mt-3'>
                                Fue así, como nuestra fundadora, se puso cómo meta, emprender su propia agencia y trabajar en compañía de su apreciado compañero felino.
                                Tristemente, Rony se marchó antes de poder iniciar con esa etapa de emprendimiento, pero
                                nunca dejo de ser fuente de inspiración, entusiasmando a nuestra directora a hacerlo parte
                                de nuestro logotipo, “la musa” de nuestra marca.
                            </p>
                            <p className='mt-3'>
                                Un gato en la luna, cuidando e inspirándonos desde el cielo,
                                rodeado de cometas, es decir, sueños y metas por cumplir; Y
                                con esto nos referimos, no solo a las propias, sino también a
                                las tuyas, al invitarnos a ser parte del desarrollo de una idea
                                desde su diseño, creación y manejo de tu negocio, por
                                medios digitales, apoyándote con nuestro conocimiento y
                                compromiso, que Rony nos impulsa a seguir, por qué
                                LalaWeen es más que un negocio, es el “Creative Team”
                                que toda marca necesita
                            </p>
                        </div>

                    </div>
                </div>
                <div className='flex items-center justify-center'>
                    <Image
                        onClick={handleClick}
                        className='cursor-pointer'
                        src="/rony.webp"
                        height={0}
                        width={500}
                        alt='rony'
                        loading='eager'
                    />
                </div>
            </div>
        </section>
    );
}

export default About;
