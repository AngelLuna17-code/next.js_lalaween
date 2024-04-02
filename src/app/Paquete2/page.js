import SmallStars from "../../../components/SmallStars";
import Accordion from "../../../components/Accordion";

const Paquete2 = () => {

    return (
        <section>
            <SmallStars />
            <div className='container mx-auto py-[100px] px-[10px]'>
                <div className='p-5 rounded-lg' style={{ background: 'rgba(0, 0, 0, 0.7)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' }}>
                    <div className='text-white'>
                        <div>
                            <h3 className='text-[#00a09b] font-black text-[23px] typing'>
                                Pa &apos; queten bien informados
                            </h3>
                            <p>
                                Ante una incognita se la solución
                            </p>
                        </div>
                        <div className='mt-5'>
                            <p className='text-[#00a09b] typing'>Proposito</p>
                            <p>
                                Diseñar y ejecutar de manera efectiva campañas publicitarias e informativas sin que la marca pierda su
                                esencia y autenticidad, a través de un lanzamiento positivo en redes sociales con diseños óptimos y atractivos para el nicho de mercado al que su negocio desee llegar.
                            </p>
                        </div>
                    </div>
                    <div className='mt-5'>
                        <p className='text-[#00a09b] typing'>
                            ¿Que implica?
                        </p>
                        <div>
                            <ul className='typing'>
                                <li>
                                    Asesoramiento en la personalización de las redes sociales según su marca
                                </li>
                                <li>
                                    Acompañamiento en el proceso de implementación en las campañas
                                    publicitarias en redes sociales.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='mt-5'>
                        <p className='text-[#00a09b] typing'>
                            ¿Qué servicios incluye?
                        </p>
                        <div>
                            <ul className='typing'>
                                <li>
                                    Creación de cuentas para la marca en redes sociales
                                    (Facebook, Instagram y/o Tiktok)
                                </li>
                                <li>
                                    Diseño de plantillas para redes sociales (Portada, Perfil y Publicaciones).
                                </li>
                                <li>
                                    4 Publicaciones en imagen tipo slide (Máximo 10 imagenes).
                                </li>
                                <li>
                                    8 Historias (imagen y video).
                                </li>
                                <li>
                                    4 Social video para reel o tiktok.
                                </li>
                            </ul>
                        </div>
                        <div className='mt-5'>
                            <p className='text-[#00a09b] typing'>
                                ¿Qué beneficios incluye?
                            </p>
                            <div>
                                <ul className='typing'>
                                    <li>
                                        Formato optimizado para Facebook e Instagram
                                    </li>
                                    <li>
                                        Publicación del contenido trabajado para redes y administración de redes sociales
                                        durante un mes.
                                    </li>
                                    <li>
                                        Coaching de comunicación visual para la ponencia online e impresos.
                                    </li>
                                    <li>
                                        Asesoramiento general para pautas en redes sociales.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='text-center text-white mt-5 typing'>
                        <p className='line-through'>COSTO REAL</p>
                        <p className='line-through'>$5,800.00 + IVA * Mes</p>
                        <p className='text-[#00a09b]'>COSTO PROMOCIONAL</p>
                        <p>$3,780.00 + IVA * Mes</p>
                    </div>
                </div>
                <div className='mt-5'>
                    <p className='text-center typing'>
                        Terminos y condiciones
                    </p>
                    <div className='mt-1'>
                        <Accordion />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Paquete2;