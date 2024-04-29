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
                    <div className='text-white text-center'>
                        <h2 className='text-white text-center text-[25px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl-[44px] 2xl:text-[48px] title-container '>
                            ¿Como nació
                            <br />
                            <span className='text-white text-center text-[25px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl-[44px] 2xl:text-[48px] title-container title'>
                                Lalaween
                            </span>
                            ?
                        </h2>
                        <p className='mt-3 mx-auto text-center'>
                            LalaWeen Creative Team nació en 2020, pero su origen se remonta a 2017 cuando su fundadora comenzó como diseñadora freelancer. Inspirada por su gato Rony, decidió emprender su propia agencia en Guadalajara, incorporándolo en el logotipo como una musa. Ofreciendo servicios de diseño y gestión de negocios digitales, comprometidos con hacer realidad los sueños de nuestros clientes, gracias al legado inspirador de Rony. En resumen, LalaWeen es el creative team que toda marca necesita.
                        </p>
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
