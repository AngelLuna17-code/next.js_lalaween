import React from 'react';
import Image from 'next/image';

const Grid = () => {

    const images = [
        '/grid/1.webp',
        '/grid/2.webp',
        '/grid/3.webp',
        '/grid/4.webp',
        '/grid/5.webp',
        '/grid/6.webp',
        '/grid/7.webp',
        '/grid/8.webp',
        '/grid/9.webp',
        '/grid/10.webp',
        '/grid/11.webp',
        '/grid/12.webp',
        '/grid/13.webp',
        '/grid/14.webp',
        '/grid/15.webp',
        '/grid/16.webp',
    ];

    // Función para dividir el arreglo en grupos de 4
    const chunkArray = (arr, chunkSize) => {
        const chunkedArray = [];
        for (let i = 0; i < arr.length; i += chunkSize) {
            chunkedArray.push(arr.slice(i, i + chunkSize));
        }
        return chunkedArray;
    };

    // Dividir las imágenes en grupos de 4
    const chunkedImages = chunkArray(images, 4);

    return (
        <section className='py-[50px] px-[15px]'>
            <div className='container mx-auto grid grid-cols-2 lg:grid-cols-4 h-[600px] overflow-y-auto'>
                {/* Mapear cada grupo de imágenes */}
                {chunkedImages.map((imageGroup, index) => (
                    <div key={index}>
                        {/* Mapear las imágenes en cada grupo */}
                        {imageGroup.map((imageUrl, idx) => (
                            <div key={idx}>
                                <Image
                                    className='h-auto- w-[100%]'
                                    src={imageUrl}
                                    alt={`Imagen ${index * 4 + idx + 1}`}
                                    width={300}
                                    height={300}
                                />
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Grid;
