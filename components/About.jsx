import React from 'react';
import Image from 'next/image';

const About = () => {
    return (
        <section>
            <div className='container mx-auto grid grid-cols-1 lg:grid-cols-2'>
                <div className='flex items-center justify-center'>
                    <div className='text-white text-center'>
                        <h2 className='text-white text-center text-[25px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl-[44px] 2xl:text-[48px] title-container '>
                            Conoce nuestra
                        </h2>
                        <h2 className='text-white text-center text-[25px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl-[44px] 2xl:text-[48px] title-container title'>
                            historia
                        </h2>
                        <p className='w-[80%] mt-3 mx-auto'>
                            Tal vez te has preguntado ¿por qué el logo de una agencia de publicidad es un gato y una luna?... pues detrás de esto hay una historia✨
                            Él es Rony, mascota de nuestra fundadora, un gatito muy simpático, cariñoso y juguetón💖 Por él, este proyecto nació; la líder anhelaba una vida plena y alegre, trabajando en casa en compañía de su leal gato🐱
                            Tristemente a Rony le toco partir antes de iniciar el plan🥹, pero nunca dejo de ser la fuente de inspiración de Lala (nuestra querida fundadora)🌟
                            Ahora Rony está viéndonos desde la luna, rodeado de cometas a los que las personas puedan pedirle sus deseos💫
                            Quizá Rony no esté en la oficina, pero dio pie a que sus sucesores, perros y gatos, lo estén😸
                            🫶Es por eso que este día de la mascota queremos dedicárselo a Rony y a todos los fieles animalitos que acompañan e invaden corazones y familias🫶                        </p>
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