import Accordion from "../../../components/Accordion";

const Paquete1 = () => {

    return (
        <section>
            {/* Hero */}
            <div className="paqs-hero hero-bg pt-[140px] pb-[100px] px-[15px]">
                <div className="container mx-auto px-[15px]">
                    <h1>
                        Pa &apos; que le emprendas
                    </h1>
                    <p className="text-xl">En sus marcas, listos... ¡¡Fuera!!</p>
                </div>
            </div>
            {/* Hero */}
            <div className='container mx-auto py-[50px] px-[10px]'>
                <div className='p-5 rounded-lg' style={{ background: 'rgba(0, 0, 0, 0.7)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' }}>
                    <div className='text-white'>
                        <div>
                            <p className='text-[#00a09b] typing text-lg'>Proposito</p>
                            <p>
                                Diseñar para comunicar de manera efectiva la personalidad, esencia e identidad de tu marca.
                                Para generar un lanzamiento positivo desde la creación de su logotipo y a través de campañas publicitarias
                                en redes sociales e impresos con diseños óptimos y atractivos para el nicho de mercado al que su negocio
                                desee llegar, sin perder su autenticidad.
                            </p>
                        </div>
                    </div>
                    <div className='mt-5'>
                        <p className='text-[#00a09b] typing text-lg'>
                            ¿Que implica?
                        </p>
                        <div>
                            <ul className='typing'>
                                <li>
                                    Asesoramiento en la personalización de la idea de negocio.
                                </li>
                                <li>
                                    Creación de Logotipo para la identidad de tu marca.
                                </li>
                                <li>
                                    Acompañamiento en el proceso de implementación en las campañas publicitarias en redes sociales.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='mt-5'>
                        <p className='text-[#00a09b] typing text-lg'>
                            ¿Qué servicios incluye?
                        </p>
                        <div>
                            <ul className='typing'>
                                <li>
                                    Diseño de Logotipo
                                </li>
                                <li>
                                    Creación de cuentas para la marca en redes sociales (Facebook, Instagram y/o Tiktok).
                                </li>
                                <li>
                                    Diseño de plantillas para redes sociales (Portada, Perfil y Publicaciones).
                                </li>
                                <li>
                                    12 Publicaciones en imagen.
                                </li>
                                <li>
                                    4 Historias (imagen y video).
                                </li>
                                <li>
                                    1 Social video para reel o tiktok
                                </li>
                                <li>
                                    1 Diseño de tarjeta de presentación en formato JPG para impresión
                                </li>
                                <li>
                                    1 Diseño de Volante en formato JPG para impresión.
                                </li>
                                <li>
                                    1 Diseño de firma para correo en PNG y JPG para uso digital.
                                </li>
                            </ul>
                        </div>
                        <div className='mt-5'>
                            <p className='text-[#00a09b] typing text-lg'>
                                ¿Qué beneficios incluye?
                            </p>
                            <div>
                                <ul className='typing'>
                                    <li>
                                        Se realizan 3 propuestas de logotipo y se selecciona uno que será entregado en formato .JPG .PNG .Ai y .EPS
                                    </li>
                                    <li>
                                        Formato optimizado para Facebook e Instagram
                                    </li>
                                    <li>
                                        Publicación del contenido trabajado para redes y administración de redes sociales durante un mes.
                                    </li>
                                    <li>
                                        Coaching de comunicación visual para la ponencia online e impresos.
                                    </li>
                                    <li>
                                        Asesoramiento general para pautas en redes sociales
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='text-center text-white mt-5 typing'>
                        <p className='line-through'>COSTO REAL</p>
                        <p className='line-through'>$8,100.00 + IVA</p>
                        <p className='text-[#00a09b]'>COSTO PROMOCIONAL</p>
                        <p>$3,500.00 + IVA</p>
                    </div>
                </div>
                <div className='mt-5'>
                    <Accordion />
                </div>
            </div>
        </section>
    );
};

export default Paquete1;