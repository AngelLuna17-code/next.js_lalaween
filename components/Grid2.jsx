import React from 'react';
import Image from 'next/image';

const Grid4 = () => {
    const gridsContent = [
        [
            [
                '/grid/branding-3/item-1.avif',
                '/grid/impresos-1/item-7.avif',
                '/grid/impresos-2/item-4.avif',
                '/grid/contenido-1/item-1.avif',
            ],
            [
                '/grid/impresos-1/item-2.avif',
                '/grid/impresos-1/item-1.avif',
                '/grid/impresos-2/item-3.avif',
                '/grid/contenido-1/item-2.avif',
            ],
            [
                '/grid/branding-2/item-1.avif',
                '/grid/impresos-2/item-7.avif',
                '/grid/contenido-1/item-3.avif',
                '/grid/contenido-1/item-4.avif',
            ],
            [
                '/grid/branding-3/item-4.avif',
                '/grid/impresos-2/item-1.avif',
                '/grid/impresos-2/item-2.avif',
                '/grid/impresos-2/item-5.avif',
            ],
        ],
        [
            [
                '/grid/branding-3/item-1.avif',
                '/grid/impresos-1/item-7.avif',
                '/grid/impresos-2/item-4.avif',
                '/grid/contenido-1/item-1.avif',
            ],
            [
                '/grid/impresos-1/item-2.avif',
                '/grid/impresos-1/item-1.avif',
                '/grid/impresos-2/item-3.avif',
                '/grid/contenido-1/item-2.avif',
            ],
            [
                '/grid/branding-2/item-1.avif',
                '/grid/impresos-2/item-7.avif',
                '/grid/contenido-1/item-3.avif',
                '/grid/contenido-1/item-4.avif',
            ],
            [
                '/grid/branding-3/item-4.avif',
                '/grid/impresos-2/item-1.avif',
                '/grid/impresos-2/item-2.avif',
                '/grid/impresos-2/item-5.avif',
            ],
        ],
    ];

    return (
        <div className='grid-container'>
            {gridsContent.map((gridContent, gridIndex) => (
                <div key={gridIndex} className='special-grid grid grid-cols-2 lg:grid-cols-4 gap-3'>
                    {gridContent.map((column, colIndex) => (
                        <div key={colIndex} className='flex flex-col'>
                            {column.map((item, imgIndex) => (
                                <div key={`${colIndex}-${imgIndex}`} className='h-full'>
                                    <Image
                                        className='object-cover w-full h-full rounded-[15px]'
                                        width={300}
                                        height={300}
                                        src={item}
                                        alt={`Imagen ${colIndex + 1}-${imgIndex + 1}`}
                                    />
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default Grid4;
