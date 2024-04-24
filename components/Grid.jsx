import React from 'react';
import Image from 'next/image';

const Grid = () => {

    const images = [
        '/grid/1.webp',
        '/grid/2.webp',
        '/grid/3.webp',
        '/grid/4.webp',
        '/grid/5.webp',
        '/grid/6.webp',
        '/grid/7.webp',
        '/grid/8.webp',
        '/grid/9.webp',
        '/grid/10.webp',
        '/grid/11.webp',
        '/grid/12.webp',
        '/grid/13.webp',
        '/grid/14.webp',
        '/grid/15.webp',
        '/grid/16.webp',
    ];

    const chunkArray = (arr, chunkSize) => {
        const chunkedArray = [];
        for (let i = 0; i < arr.length; i += chunkSize) {
            chunkedArray.push(arr.slice(i, i + chunkSize));
        }
        return chunkedArray;
    };

    const chunkedImages = chunkArray(images, 4);

    return (
        <section className='py-[50px] px-[15px]'>
            <div className='container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5'>
                <div className='order-2 lg:order-1'>
                    <div className='grid grid-cols-2 lg:grid-cols-4 gap-3 h-[700px] overflow-y-auto'>
                        {chunkedImages.map((imageGroup, index) => (
                            <div key={index}>
                                {imageGroup.map((imageUrl, idx) => (
                                    <div key={idx}>
                                        <Image
                                            className='h-auto- w-[100%] mt-3'
                                            src={imageUrl}
                                            alt={`Imagen ${index * 4 + idx + 1}`}
                                            width={300}
                                            height={300}
                                        />
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
                <div className='order-1 lg:order-2 flex items-center justify-center'>
                    <div>
                        <h2 className='text-white text-center text-[25px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl-[44px] 2xl:text-[48px] title-container '>
                            Mira nuestro
                            <br />
                            <span className='text-white text-center text-[25px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl-[44px] 2xl:text-[48px] title-container title'>
                                portafolio
                            </span>
                        </h2>
                        <p className='text-center mt-3'>
                            Nosotros somos LalaWeen, agencia de publicidad y diseño. El creative team de diseño y marketing, que tu negocio necesita. Con la experiencia que nos respalda llevaremos tu negocio al siguiente nivel.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Grid;
