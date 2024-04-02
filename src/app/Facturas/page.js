import React from 'react';
import SmallStars from '../../../components/SmallStars';
import Facturar from '../../../components/Facturar';

const Facturas = () => {
    return (
        <main>
            <section>
                <div className='fac-hero hero-bg py-[120px]'>
                    <div className='container mx-auto'>
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
