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
            /* branding-1 */
            <Flip key="Flip" />,
            <Flip3 key="Flip3" />,
            /* branding-1 */
            /* branding-3 */
            '/grid/branding-3/item-1.avif',
            /* branding-3 */
            /* impresos-1 */
            '/grid/impresos-1/item-7.avif',
            /* impresos-1 */
            /* impresos-2 */
            '/grid/impresos-2/item-4.avif',
            /* impresos-2 */
            /* contenido-1 */
            '/grid/contenido-1/item-1.avif',
            <Flip13 key="Flip13" />,
            /* contenido-1 */
        ],
        [
            /* branding-1 */
            <Flip2 key="Flip2" />,
            <Flip4 key="Flip4" />,
            /* branding-1 */
            /* impresos-1 */
            '/grid/impresos-1/item-2.avif',
            '/grid/impresos-1/item-1.avif',
            /* impresos-1 */
            /* impresos-2 */
            <Flip12 key="Flip12" />,
            /* impresos-2 */
            /* contenido-1 */
            <Flip14 key="Flip14" />,
            /* contenido-1 */
        ],
        [
            /* branding-2 */
            '/grid/branding-2/item-1.avif',
            <Flip5 key="Flip5" />,
            /* branding-2 */
            /* Branding-3 */
            <Flip8 key="Flip8" />,
            /* Branding-3 */
            /* impresos-1 */
            <Flip9 key="Flip9" />,
            <Flip10 key="Flip10" />,
            /* impresos-1 */
            /* impresos-2 */
            '/grid/impresos-2/item-3.avif',
            /* impresos-2 */
            /* contenido-1 */
            <Flip15 key="Flip15" />,
            /* contenido-1 */
        ],
        [
            /* branding-2 */
            <Flip6 key="Flip6" />,
            <Flip7 key="Flip7" />,
            /* branding-2 */
            /* branding-3 */
            '/grid/branding-3/item-4.avif',
            /* branding-3 */
            /* impresos-2 */
            <Flip11 key="Flip11" />,
            '/grid/impresos-2/item-7.avif',
            /* impresos-2 */
            /* contenido-1 */
            '/grid/contenido-1/item-2.avif',
            '/grid/contenido-1/item-3.avif',
            /* contenido-1 */
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