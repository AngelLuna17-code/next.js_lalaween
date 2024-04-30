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

const Grid = () => {

    const columnImages = [
        [
            /* branding-1 */
            <Flip key="Flip" />,
            <Flip3 key="Flip3" />
            /* branding-1 */
        ],
        [
            /* branding-1 */

            <Flip2 key="Flip2" />,
            <Flip4 key="Flip4" />
            /* branding-1 */
        ],
        [
            /* branding-2 */
            '/grid/branding-2/item-1.avif',
            <Flip5 key="Flip5" />
            /* branding-2 */
        ],
        [
            /* branding-2 */
            <Flip6 key="Flip6" />,
            <Flip7 key="Flip7" />
            /* branding-2 */
        ],
    ];

    return (
        <section className='py-[50px] px-[15px]'>
            <div className='container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5'>
                <div className='order-2 lg:order-1'>
                    <div className='special-grid grid grid-cols-2 lg:grid-cols-4 gap-3 h-[400px] md:h-[600px] lg:h-[600px] overflow-y-auto overflow-x-hidden rounded-[15px]'>
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