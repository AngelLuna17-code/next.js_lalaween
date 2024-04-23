"use client";
import React, { useState } from 'react';
import Slider from 'react-slick';
import Image from 'next/image';

const Port = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState('');

  // Función para abrir el modal y mostrar la imagen seleccionada
  const openModal = (imageUrl) => {
    setModalImage(imageUrl);
    setIsModalOpen(true);
  };

  // Función para cerrar el modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const settings = {
    // Configuraciones del slider
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <section className='px-[15px] py-[50px]'>
      <div className='container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5'>
        <div>
          <Slider
            className='slider w-[85%] sm:w-[90%] md:w-[93%] lg:w-[95%] mx-auto'
            style={{ background: 'rgba(0, 0, 0, 0.7)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' }}
            {...settings}
          >
            {/* slide 1 */}
            <div>
              <div className='grid grid-cols-3 gap-5'>
                {/* col 1 */}
                <div>
                  <Image
                    className='h-[500px] w-auto object-cover mx-auto cursor-pointer'
                    height={300}
                    width={300}
                    src="/portafolio/branding-1/item-1.webp"
                    alt="portafolio"
                    onClick={() => openModal("/portafolio/branding-1/item-1.webp")}
                  />
                </div>
                {/* col 1 */}
                {/* col 2 */}
                <div className='col col-span-1'>
                  <Image
                    className='mx-auto h-[500px] w-auto object-cover cursor-pointer'
                    height={300}
                    width={300}
                    src="/portafolio/branding-1/item-3.webp"
                    alt="portafolio"
                    onClick={() => openModal("/portafolio/branding-1/item-3.webp")}
                  />
                </div>
                {/* col 2 */}
                {/* col 3 */}
                <div>
                  <Image
                    className='mx-auto h-[500px] w-auto object-cover cursor-pointer'
                    height={300}
                    width={300}
                    src="/portafolio/branding-1/item-5.webp"
                    alt="portafolio"
                    onClick={() => openModal("/portafolio/branding-1/item-5.webp")}
                  />
                </div>
                {/* col 3 */}
              </div>
            </div>
            {/* slide 1 */}
            <div>
              2
            </div>
            <div>
              3
            </div>
          </Slider>
        </div>
        <div className=''>
          {/* Modal */}
          {isModalOpen && (
            <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50">
              <div className="max-w-3xl bg-white rounded-lg overflow-hidden">
                <Image
                  src={modalImage}
                  alt="modal"
                  className="w-full h-auto"
                  height={500}
                  width={500}
                />
                <button
                  onClick={closeModal}
                  className="absolute top-0 right-0 m-4 bg-red-500 text-white text-xl font-semibold px-3 py-1 rounded-full cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Port;
