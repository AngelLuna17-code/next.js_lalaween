import React from 'react';
import Facturar from '../../../components/Facturar';

const Facturas = () => {
    return (
        <main>
            <section>
                <div className='fac-hero hero-bg py-[130px]'>
                    <div className='container mx-auto px-[15px]'>
                        <h1>
                            Facturar
                        </h1>
                    </div>
                </div>
                <Facturar />
            </section>
        </main>
    );
};

export default Facturas;
