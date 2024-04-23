import React from 'react';
import Image from 'next/image';

const Grid = () => {
 
    const images = [
        '/grd/',
    ];

    return (
        <section className='py-[50px] px-[15px]'>
            <div className='container mx-auto grid grid-cols-2 lg:grid-cols-4'>
                {images.map((imageUrl, index) => (
                    <div key={index}>
                        <Image
                            src={imageUrl}
                            alt={`Imagen ${index + 1}`}
                            width={300}
                            height={300}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Grid;
