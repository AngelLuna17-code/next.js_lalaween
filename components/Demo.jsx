import React from 'react';
import Image from 'next/image';

function Demo() {
    return (
        <div className='container mx-auto'>
            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <Image
                            src="/portafolio/branding-1/item-1.webp"
                            alt="Front Avatar"
                            width={300}
                            height={300}
                        />
                    </div>
                    <div className="flip-card-back">
                        <Image
                            src="/portafolio/branding-1/item-2.webp"
                            alt="Back Avatar"
                            width={300}
                            height={300}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Demo;
