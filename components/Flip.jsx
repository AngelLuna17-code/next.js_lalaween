"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const Flip = ({ frontImageSrc, backImageSrc }) => {
    const [flipped, setFlipped] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setFlipped(prevFlipped => !prevFlipped);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flip-card-container-xl overflow-hidden">
            <div className={`flip-card ${flipped ? 'flipped' : ''}`}>
                <div className="flip-card-front">
                    <Image
                        className='h-auto w-[100%] rounded-[15px]'
                        src="/grid/item-1.avif"
                        alt="Front Image"
                        width={300}
                        height={300}
                    />
                </div>
                <div className="flip-card-back">
                    <Image
                        className='h-auto w-[100%] rounded-[15px]'
                        src="/grid/item-2.avif"
                        alt="Front Image"
                        width={300}
                        height={300}
                    />
                </div>
            </div>
        </div>
    );
};

const Flip2 = ({ frontImageSrc, backImageSrc }) => {
    const [flipped, setFlipped] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setFlipped(prevFlipped => !prevFlipped);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flip-card-container-sm">
            <div className={`flip-card rounded-[15px] overflow-hidden ${flipped ? 'flipped' : ''}`}>
                <div className="flip-card-front">
                    <Image
                        className='h-auto w-[100%]'
                        src="/grid/item-5.avif"
                        alt="Front Image"
                        width={300}
                        height={300}
                    />
                </div>
                <div className="flip-card-back">
                    <Image
                        className='h-auto w-[100%] rounded-[15px]'
                        src="/grid/item-6.avif"
                        alt="Front Image"
                        width={300}
                        height={300}
                    />
                </div>
            </div>
        </div>
    );
};

export { Flip, Flip2 };
