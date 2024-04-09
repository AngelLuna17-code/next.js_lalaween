import React from 'react';
import Image from 'next/image';
import AnimatedText from '../components/AnimatedText';
import Link from 'next/link';

const Hero = () => {

    return (
        <section className='px-[15px] pt-[125px] pb-8 lg:pt-32 lg:pb-10]'>
            <div className='container mx-auto'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                    <div className='flex items-center justify-center'>
                        <Image
                            src="/logo.webp"
                            alt="logo"
                            width={500}
                            height={350}
                            loading='eager'
                        />
                    </div>
                    <div className='text-white text-center flex items-center justify-center overflow-hidden'>
                        <div>
                            <h1 className='font-thin'>Impulsamos</h1>
                            <AnimatedText />
                            <h1>conservando tu esencia</h1>
                            <Link href="/Planes">
                                <button className='w-full lg:w-3/4 bg-[#066a69] hover:bg-[#01a09a] px-12 py-3 font-black rounded-lg mt-3'>
                                    Nuestros Paquetes
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default Hero;