import React from 'react';
import Facturar from '../../../components/Facturar';

const Facturas = () => {
    return (
        <main>
            <section>
                <div className='fac-hero hero-bg pt-[140px] pb-[100px] px-[15px]'>
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
