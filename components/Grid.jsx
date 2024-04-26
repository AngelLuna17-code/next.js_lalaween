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
    Flip17
} from '../components/Flip';

const Grid = () => {

    const columnImages = [
        [
            <Flip key="Flip" />,
            '/grid/item-3.avif',
            '/grid/item-4.avif',
            <Flip2 key="flip2" />,
            '/grid/item-7.avif',
            '/grid/item-8.avif',
            '/grid/item-9.avif',
            <Flip6 key="flip6" />,
            '/grid/item-12.avif',
            '/grid/item-13.avif',
            '/grid/item-14.avif',
            '/grid/item-15.avif',
            <Flip7 key="flip7" />,
            '/grid/item-18.avif',
            '/grid/item-19.avif',
            '/grid/item-20.avif',
            '/grid/item-21.avif',
            '/grid/item-22.avif',
            '/grid/item-23.avif',
            '/grid/item-24.avif',
            '/grid/item-25.avif',
            '/grid/item-26.avif',
            <Flip10 key="flip10" />,
            '/grid/item-29.avif',
            '/grid/item-30.avif',
            '/grid/item-31.avif',
            '/grid/item-32.avif',
            '/grid/item-33.avif',
            '/grid/item-34.avif',
        ],
        [
            '/grid/item-35.avif',
            '/grid/item-36.avif',
            '/grid/item-37.avif',
            '/grid/item-38.avif',
            '/grid/item-39.avif',
            '/grid/item-40.avif',
            '/grid/item-41.avif',
            '/grid/item-42.avif',
            <Flip8 key="flip8" />,
            '/grid/item-47.avif',
            '/grid/item-48.avif',
            '/grid/item-49.avif',
            '/grid/item-50.avif',
            <Flip9 key="flip9" />,
            '/grid/item-53.avif',
            '/grid/item-54.avif',
            '/grid/item-55.avif',
            '/grid/item-56.avif',
            '/grid/item-57.avif',
            <Flip11 key="flip11" />,
            '/grid/item-60.avif',
            '/grid/item-61.avif',
            '/grid/item-62.avif',
            '/grid/item-63.avif',
            '/grid/item-64.avif',
            '/grid/item-65.avif',
            '/grid/item-66.avif',
            <Flip12 key="flip12" />
        ],
        [
            <Flip3 key="flip3" />,
            '/grid/item-71.avif',
            '/grid/item-72.avif',
            <Flip5 key="flip5" />,
            '/grid/item-75.avif',
            <Flip13 key="flip13" />,
            '/grid/item-78.avif',
            '/grid/item-79.avif',
            <Flip14 key="flip14" />,
            '/grid/item-82.avif',
            '/grid/item-83.avif',
            '/grid/item-84.avif',
            '/grid/item-85.avif',
            '/grid/item-86.avif',
            <Flip15 key="flip15" />,
            '/grid/item-89.avif',
            '/grid/item-90.avif',
            '/grid/item-91.avif',
            '/grid/item-92.avif',
            '/grid/item-93.avif',
            '/grid/item-94.avif',
            '/grid/item-95.avif',
            '/grid/item-96.avif',
            '/grid/item-97.avif',
            <Flip16 key="flip16" />,
            '/grid/item-100.avif',
            '/grid/item-101.avif',
            '/grid/item-102.avif'
        ],
        [
            '/grid/item-103.avif',
            <Flip4 key="Flip4" />,
            '/grid/item-106.avif',
            '/grid/item-107.avif',
            '/grid/item-108.avif',
            '/grid/item-109.avif',
            '/grid/item-110.avif',
            <Flip17 key="Flip17" />,
            '/grid/item-113.avif',
            '/grid/item-114.avif',
            '/grid/item-115.avif',
            '/grid/item-116.avif',
            '/grid/item-117.avif',
            '/grid/item-118.avif',
            '/grid/item-119.avif',
            '/grid/item-120.avif',
            '/grid/item-121.avif',
            '/grid/item-122.avif',
            '/grid/item-123.avif',
            '/grid/item-124.avif',
            '/grid/item-125.avif',
            '/grid/item-126.avif',
            '/grid/item-127.avif',
            '/grid/item-128.avif',
            '/grid/item-129.avif',
            '/grid/item-130.avif',
            '/grid/item-131.avif',
            '/grid/item-132.avif',
            '/grid/item-133.avif',
            '/grid/item-134.avif',
            '/grid/item-135.avif',
            '/grid/item-136.avif',
            '/grid/item-137.avif',
            '/grid/item-138.avif',
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