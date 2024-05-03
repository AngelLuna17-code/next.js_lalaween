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
    Flip21,
    Flip22,
    Flip23,
    Flip24,
    Flip25,
    Flip26,
    Flip27,
    Flip28,
    Flip29,
    Flip30,
    Flip31,
    Flip32,
    Flip33,
    Flip34,
    Flip35,
    Flip36
} from '../components/Flip';

const Grid = () => {

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
            /* impresos-3 */
            '/grid/impresos-3/item-1.avif',
            /* impresos-3 */
            /* impresos-4 */
            '/grid/impresos-4/item-5.avif',
            /* impresos-4 */
            /* impresos-5 */
            '/grid/impresos-5/item-4.avif',
            /* impresos-5 */
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
            /* impresos-3 */
            '/grid/impresos-3/item-2.avif',
            /* impresos-3 */
            /* impresos-4 */
            '/grid/impresos-4/item-4.avif',
            /* impresos-4 */
            /* impresos-5 */
            '/grid/impresos-5/item-5.avif',
            /* impresos-5 */
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
            /* impresos-3 */
            '/grid/impresos-3/item-3.avif',
            /* impresos-3 */
            /* impresos-4 */
            <Flip20 key="Flip20" />,
            /* impresos-4 */
            /* impresos-5 */
            <Flip21 key="Flip21" />,
            /* impresos-4 */
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
            /* impresos-4 */
            '/grid/impresos-4/item-1.avif',
            /* impresos-4 */
            /* impresos-5 */
            '/grid/impresos-5/item-1.avif',
            /* impresos-5 */
        ],
        /* contenido-1 */
        [
            '/grid/contenido-1/item-2.avif',
            '/grid/contenido-1/item-3.avif'
        ],
        [
            <Flip13 key="Flip13" />,
            '/grid/contenido-1/item-5.avif',
        ],
        [
            '/grid/contenido-1/item-6.avif',
            <Flip14 key="Flip14" />,
        ],
        [
            '/grid/contenido-1/item-8.avif',
            '/grid/contenido-1/item-9.avif',
        ],
        /* contenido-1 */
        /* contenido-2 */
        [
            '/grid/contenido-2/item-7.avif',
        ],
        [
            '/grid/contenido-2/item-2.avif',
            <Flip15 key="Flip15" />,
        ],
        [
            <Flip16 key="Flip16" />,
            '/grid/contenido-2/item-5.avif',
        ],
        [
            '/grid/contenido-2/item-6.avif',
            '/grid/contenido-2/item-1.avif',
        ],
        /* contenido-2 */
        /* contenido-3 */
        [
            <Flip17 key="Flip17" />,
            '/grid/contenido-3/item-4.avif',
        ],
        [

            '/grid/contenido-3/item-5.avif',
            '/grid/contenido-3/item-6.avif',
        ],
        [
            '/grid/contenido-3/item-7.avif',
            <Flip18 key="Flip18" />,
        ],
        [
            '/grid/contenido-3/item-1.avif',
            '/grid/contenido-3/item-2.avif',
        ],
        /* contenido-3 */
        /* contenido-4 */
        [
            '/grid/contenido-4/item-1.avif',
            <Flip19 key="Flip19" />,
        ],
        [
            '/grid/contenido-4/item-3.avif',
            '/grid/contenido-4/item-4.avif',
        ],
        [
            <Flip22 key="Flip122" />,
            '/grid/contenido-4/item-7.avif',
        ],
        [
            '/grid/contenido-4/item-5.avif',
        ],
        /* contenido-4 */
        /* contenido-5 */
        [
            <Flip23 key="Flip123" />,
            '/grid/contenido-5/item-4.avif',
        ],
        [
            '/grid/contenido-5/item-5.avif',
            <Flip24 key="Flip124" />,
        ],
        [
            '/grid/contenido-5/item-7.avif',
            '/grid/contenido-5/item-8.avif',
        ],
        [
            '/grid/contenido-5/item-1.avif',
            '/grid/contenido-5/item-2.avif',
        ],
        /* contenido-5 */
        /* contenido-6 */
        [
            '/grid/contenido-6/item-1.avif',
            <Flip25 key="Flip25" />,
        ],
        [
            '/grid/contenido-6/item-3.avif',
            '/grid/contenido-6/item-4.avif',
        ],
        [
            <Flip26 key="Flip26" />,
            '/grid/contenido-6/item-7.avif',
        ],
        [
            '/grid/contenido-6/item-5.avif',
        ],
        /* contenido-6 */
        /* contenido-7 */
        [
            '/grid/contenido-7/item-3.avif',
            '/grid/contenido-7/item-4.avif',
        ],
        [
            <Flip27 key="Flip27" />,
            <Flip28 key="Flip28" />,
        ],
        [
            '/grid/contenido-7/item-7.avif',
            '/grid/contenido-7/item-8.avif',
        ],
        [
            '/grid/contenido-7/item-1.avif',
            '/grid/contenido-7/item-2.avif',
        ],
        /* contenido-7 */
        /* contenido-8 */
        [
            '/grid/contenido-8/item-1.avif',
            <Flip29 key="Flip29" />,
        ],
        [
            '/grid/contenido-8/item-3.avif',
            <Flip30 key="Flip30" />,
        ],
        [
            '/grid/contenido-8/item-5.avif',
            '/grid/contenido-8/item-6.avif',
        ],
        [
            '/grid/contenido-8/item-7.avif',
        ],
        /* contenido-8 */
        /* contenido-9 */
        [
            '/grid/contenido-9/item-7.avif',
        ],
        [
            '/grid/contenido-9/item-3.avif',
            <Flip31 key="Flip31" />,
        ],
        [
            '/grid/contenido-9/item-5.avif',
            <Flip32 key="Flip32" />,
        ],
        [
            '/grid/contenido-9/item-1.avif',
            '/grid/contenido-9/item-2.avif',
        ],
        /* contenido-9 */
        /* contenido-10 */
        [
            '/grid/contenido-10/item-1.avif',
            <Flip33 key="Flip33" />,
        ],
        [
            '/grid/contenido-10/item-3.avif',
            '/grid/contenido-10/item-4.avif',
        ],
        [
            <Flip34 key="Flip34" />,
            '/grid/contenido-10/item-7.avif',
        ],
        [
            '/grid/contenido-10/item-5.avif',
        ],
        /* contenido-10 */
        /* contenido-11 */
        [
            '/grid/contenido-11/item-3.avif',
            <Flip35 key="Flip35" />,
        ],
        [
            '/grid/contenido-11/item-5.avif',
            '/grid/contenido-11/item-6.avif',
        ],
        [
            <Flip36 key="Flip36" />,
            '/grid/contenido-11/item-8.avif',
        ],
        [
            '/grid/contenido-11/item-1.avif',
            '/grid/contenido-11/item-2.avif',
        ],
        /* contenido-11 */
        /* contenido-12 */
        [
            '/grid/contenido-12/item-1.avif',
            '/grid/contenido-12/item-2.avif',
        ],
        [
            '/grid/contenido-12/item-3.avif',
            '/grid/contenido-12/item-4.avif',
        ],
        [
            '/grid/contenido-12/item-5.avif',
            '/grid/contenido-12/item-6.avif',
        ],
        [
            '/grid/contenido-12/item-7.avif',
            '/grid/contenido-12/item-8.avif',
        ],
        /* contenido-12 */
    ];

    return (
        <section className='py-[50px] px-[15px]'>
            <div className='container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5'>
                <div className='order-2 lg:order-1 h-[400px] md:h-[600px] lg:h-[600px] overflow-y-auto'>
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