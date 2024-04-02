import React from 'react';
import Image from 'next/image';

const About = () => {
    return (
        <section>
            <div id="about" className='container mx-auto grid grid-cols-1 lg:grid-cols-2 py-[50px]'>
                <div className='flex items-center justify-center'>
                    <div className='text-white text-center'>
                        <h2 className='text-white text-center text-[25px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl-[44px] 2xl:text-[48px] title-container '>
                            Conoce nuestra
                        </h2>
                        <h2 className='text-white text-center text-[25px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl-[44px] 2xl:text-[48px] title-container title'>
                            historia
                        </h2>
                        <p className='w-[80%] mt-3 mx-auto text-center'>
                            Nuestro logo, un gato y una luna, tiene una historia especial. Rony, la mascota de nuestra fundadora,
                            fue la inspiración. Aunque ya no está físicamente, sigue siendo nuestra fuente de inspiración.
                            Ahora imaginamos a Rony en la luna, donde las personas pueden pedir deseos. En el día de la mascota,
                            honramos a Rony y a todos los animales que alegran nuestras vidas.
                        </p>
                    </div>
                </div>
                <div className='flex items-center justify-center'>
                    <div className='bg-white px-6 pb-[60px]'>
                        <svg className='mx-auto text-[#212529]' xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M9.828.722a.5.5 0 0 1 .354.146l4.95 4.95a.5.5 0 0 1 0 .707c-.48.48-1.072.588-1.503.588-.177 0-.335-.018-.46-.039l-3.134 3.134a6 6 0 0 1 .16 1.013c.046.702-.032 1.687-.72 2.375a.5.5 0 0 1-.707 0l-2.829-2.828-3.182 3.182c-.195.195-1.219.902-1.414.707s.512-1.22.707-1.414l3.182-3.182-2.828-2.829a.5.5 0 0 1 0-.707c.688-.688 1.673-.767 2.375-.72a6 6 0 0 1 1.013.16l3.134-3.133a3 3 0 0 1-.04-.461c0-.43.108-1.022.589-1.503a.5.5 0 0 1 .353-.146" />
                        </svg>
                        <div className='bg-[#4274a6]'>
                            <Image
                                src="/rony.webp"
                                height={0}
                                width={500}
                                alt='rony'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;