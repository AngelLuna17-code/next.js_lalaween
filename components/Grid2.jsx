import React from 'react';
import Image from 'next/image';
import {
    Flip,
    Flip2,
    Flip3,
    Flip4,
    Flip5,
    Flip6,
    Flip7,
    Flip8,
    Flip9,
    Flip10,
    Flip11,
    Flip12,
    Flip13,
    Flip14,
    Flip15,
    Flip16,
    Flip17,
    Flip18,
    Flip19,
    Flip20,
    Flip21
} from '../components/Flip';

const Grid2 = () => {

    const columnImages = [
      
        [
            '/grid/contenido-1/item-2.avif',
            '/grid/contenido-1/item-3.avif',
        ],
        [
            '/grid/contenido-1/item-4.avif',
            '/grid/contenido-1/item-5.avif',

        ],
        [
            '/grid/contenido-1/item-6.avif',
            '/grid/contenido-1/item-7.avif',
 
        ],
        [
            '/grid/contenido-1/item-8.avif',
            '/grid/contenido-1/item-9.avif',
        ],
    ];

    return (
        <div className='special-grid grid grid-cols-2 lg:grid-cols-4 gap-3 overflow-x-hidden rounded-[15px]'>
            {columnImages.map((column, colIndex) => (
                <div key={colIndex}>
                    {column.map((item, imgIndex) => (
                        typeof item === 'string' ? (
                            <Image
                                className='h-auto- w-[100%] rounded-[15px]'
                                width={300}
                                height={300}
                                key={`${colIndex}-${imgIndex}`}
                                src={item}
                                alt={`Imagen ${colIndex + 1}-${imgIndex + 1}`}
                            />
                        ) : (
                            <div
                                key={`${colIndex}-${imgIndex}`}>
                                {item}
                            </div>
                        )
                    ))}
                </div>
            ))}
        </div>
    );
};

export default Grid2;