import React from 'react';
import Paquetes from '../../../components/Paquetes';

const Promociones = () => {

    return (
        <main>
            <section>
                <div className='promo-hero hero-bg py-[130px]'>
                    <div className='container mx-auto'>
                        <h1>
                            Planes
                        </h1>
                    </div>
                </div>
                <Paquetes />
            </section>
        </main>
    );
};

export default Promociones;