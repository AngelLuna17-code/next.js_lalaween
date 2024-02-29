import React from 'react';
import Image from 'next/image';

const About = () => {
    return (
        <section>
            <div className='container mx-auto grid grid-cols-1 lg:grid-cols-2 py-[50%] lg:py-[100px]'>
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
                    <Image
                        className=''
                        src="/rony.webp"
                        height={0}
                        width={500}
                        alt='rony'
                    />
                </div>
            </div>
        </section>
    );
}

export default About;