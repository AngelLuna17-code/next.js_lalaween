import React from 'react';
import Image from 'next/image';

function Demo() {
    return (
        <section className='py-[50px] px-[15px]'>
            <div className='container mx-auto grid grid-cols-1 lg:grid-cols-2'>
                <div className="flip-box">
                    <div className="flip-box-inner">
                        <div className="flip-box-front">
                            <div>
                                <Image
                                    src="/portafolio/branding-1/item-1.webp"
                                    alt="item"
                                    width={300}
                                    height={200}
                                    loading='lazy'
                                />
                            </div>
                        </div>
                        <div className="flip-box-back">
                            <div>
                                <Image
                                    src="/portafolio/branding-1/item-2.webp"
                                    alt="item"
                                    width={300}
                                    height={200}
                                    loading='lazy'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Demo;
