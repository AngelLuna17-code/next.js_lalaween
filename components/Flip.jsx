import React from 'react';
import Image from 'next/image';

const Flip = ({ frontImageSrc, backImageSrc }) => {
    return (
        <div className="flip-card-container">
            <div className="flip-card">
                <div className="flip-card-front">
                    <Image
                        className='h-auto w-[100%]'
                        src="/grid/item-1.avif"
                        alt="Front Image"
                        width={0}
                        height={0}
                    />
                </div>
                <div className="flip-card-back">
                    <Image
                        className='h-auto w-[100%]'
                        src="/grid/item-9.avif"
                        alt="Front Image"
                        width={0}
                        height={0}
                    />
                </div>
            </div>
        </div>
    );
};

export default Flip;
