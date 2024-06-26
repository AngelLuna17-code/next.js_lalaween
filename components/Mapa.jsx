import React from 'react';

export default function Mapa() {
    return (
        <section className='py-[50px] px-[15px]'>
            <div className='container mx-auto overflow-hidden'>
                <div className='grid sm:grid-cols-1 lg:grid-cols-2 gap-5'>
                    <div className='flex items-center justify-center'>
                        <div className='text-white text-center'>
                            <h2 className='text-white text-center text-[25px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl-[44px] 2xl:text-[48px] title-container'>
                                Aquí nos
                                <br />
                                <span className='text-white text-center text-[25px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl-[44px] 2xl:text-[48px] title-container title'>
                                    encontramos
                                </span>
                            </h2>
                        </div>
                    </div>
                    <div className=''>
                        <div className='flex items-center justify-center'>
                            <iframe
                                className='p-0 h-[300px] sm:h-[450px] lg:h-[350px] w-full'
                                title="Mapa"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3712.7537346673344!2d-104.86511612481081!3d21.478177380286013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842737cece0a2ad9%3A0x466ffc674c08577c!2sLalaween!5e0!3m2!1sen!2smx!4v1701447455809!5m2!1sen!2smx"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            >
                            </iframe>
                        </div>
                        <div className='mt-5'>
                            <p className='text-white text-center'>
                                Lago Erie 77, Lagos del Country, 63175 Tepic, Nay.
                            </p>
                            <p className='text-white text-center font-bold hover:text-[#00cac4]'>
                                <a href='https://maps.app.goo.gl/qwFmJHHRY3W8afux7' target='blank'>
                                    Ver mapa
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}