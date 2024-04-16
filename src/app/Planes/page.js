import React from 'react';
import Paquetes from '../../../components/Paquetes';
import PlanForm from '../../../components/PlanForm';

const Promociones = () => {

    return (
        <main>
            <section>
                <div className='promo-hero hero-bg py-[130px] px-[15px]'>
                    <div className='container mx-auto'>
                        <h1>
                            Planes
                        </h1>
                    </div>
                </div>
                <Paquetes />
                <PlanForm />
            </section>
        </main>
    );
};

export default Promociones;