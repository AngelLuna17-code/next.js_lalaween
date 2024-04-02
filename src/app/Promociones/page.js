import React from 'react';
import Paquetes from '../../../components/Paquetes';

const Promociones = () => {

    return (
        <main>
            <section>
                <div className='paq-hero hero-bg py-[120px]'>
                    <div className='container mx-auto'>
                        <h1>
                            Promociones
                        </h1>
                    </div>
                </div>
                <Paquetes />
            </section>
        </main>
    );
};

export default Promociones;