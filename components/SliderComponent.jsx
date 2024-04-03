"use client";
import React, { useEffect } from 'react';

const SliderComponent = () => {
    useEffect(() => {
        const radioButtons = document.querySelectorAll('input[type=radio]');

        const slideShow = () => {
            for (let i = 0; i < radioButtons.length; i++) {
                setInterval(() => {
                    console.log(i);
                }, 3000);
            }
        };

        slideShow();
    }, []);

    return (
        <section className='px-[15px]'>
            <div className='container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5'>
                <div className='flex items-center justify-center'>
                    <div className='text-white text-center'>
                        <h2 className='text-white text-center text-[25px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl-[44px] 2xl:text-[48px] title-container '>
                            Mira nuestro
                        </h2>
                        <h2 className='text-white text-center text-[25px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl-[44px] 2xl:text-[48px] title-container title'>
                            portafolio
                        </h2>
                    </div>
                </div>
                <div id="slider">
                    <input type="radio" name="slider" id="s1" defaultChecked />
                    <input type="radio" name="slider" id="s2" />
                    <input type="radio" name="slider" id="s3" />
                    <input type="radio" name="slider" id="s4" />
                    <input type="radio" name="slider" id="s5" />
                    <input type="radio" name="slider" id="s6" />

                    <label htmlFor="s1" id="slide1">1</label>
                    <label htmlFor="s2" id="slide2">2</label>
                    <label htmlFor="s3" id="slide3">3</label>
                    <label htmlFor="s4" id="slide4">4</label>
                    <label htmlFor="s5" id="slide5">5</label>
                    <label htmlFor="s6" id="slide6">6</label>

                </div>
            </div>
        </section>
    );
};

export default SliderComponent;
