
import React from 'react';
import Image from 'next/image';

const Flip = ({ frontImageSrc, backImageSrc }) => {
    return (
        <div className="flip-card-container-xl overflow-hidden">
            <div className="flip-card">
                <div className="flip-card-front">
                    <Image
                        className='h-auto w-[100%]'
                        src="/grid/item-1.avif"
                        alt="Front Image"
                        width={300}
                        height={300}
                    />
                </div>
                <div className="flip-card-back">
                    <Image
                        className='h-auto w-[100%]'
                        src="/grid/item-14.avif"
                        alt="Front Image"
                        width={300}
                        height={300}
                    />
                </div>
            </div>
        </div>
    );
};

export default Flip;


