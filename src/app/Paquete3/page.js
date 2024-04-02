import SmallStars from "../../../components/SmallStars";
import Accordion from "../../../components/Accordion";

const Paquete3 = () => {

    return (
        <section>
            <SmallStars />
            <div className="paqs-hero hero-bg py-[130px]">
                <div className="container mx-auto px-[15px]">
                    <h1>
                        Pa &apos; quete encuentren siempre
                    </h1>
                    <p className="text-xl">
                        Ante la duda una solución
                    </p>
                </div>
            </div>
            <div className='container mx-auto py-[50px] px-[10px]'>
                <div className='p-5 rounded-lg' style={{ background: 'rgba(0, 0, 0, 0.7)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' }}>
                    <div className='text-white'>
                        <div>
                            <p className='text-[#00a09b] typing text-lg'>
                                Proposito
                            </p>
                            <p>
                                Mejorar la experiencia de sus usuarios y lograr un mayor alcance, con un máximo nivel de exposición posible
                                para cumplir satisfactoriamente las necesidades de su nicho; conservando la autenticidad y personalidad
                                de su marca, a través de un lanzamiento activo en redes sociales e implementación de su página web.
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
                                    Implantación de soluciones digitales (Redes sociales y Pagina Web).
                                </li>
                                <li>
                                    Asesoramiento en la personalización de las distribución digital de su marca.
                                </li>
                                <li>
                                    Acompañamiento en el proceso de implementación en las campañas
                                    publicitarias en redes sociales.
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
                                    Desarrollo y diseño de su página Web
                                </li>
                                <li>
                                    Creación de cuentas para la marca en redes sociales
                                    (Facebook, Instagram y/o Tiktok).
                                </li>
                                <li>
                                    Diseño de plantillas para redes sociales (Portada, Perfil y Publicaciones).
                                </li>
                                <li>
                                    3 Publicaciones en imagen.
                                </li>
                                <li>
                                    8 Publicaciones en imagen tipo slide (Máximo 10 imagenes)
                                </li>
                                <li>
                                    12 Historias (imagen y video).
                                </li>
                                <li>
                                    4 Social video para reel o tiktok.
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
                                        Formato optimizado para Facebook e Instagram
                                    </li>
                                    <li>
                                        Publicación del contenido trabajado para redes y administración de redes sociales
                                        durante un mes.
                                    </li>
                                    <li>
                                        Gestión, asesoria y el mantenimiento de la página Web.
                                    </li>
                                    <li>
                                        Asesoramiento general para pautas en redes sociales.
                                    </li>
                                    <li>
                                        Coaching de comunicación visual para la ponencia online e impresos
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='text-center text-white mt-5 typing'>
                        <p className='line-through'>COSTO REAL</p>
                        <p className='line-through'>$26,950.00 + IVA * Mes</p>
                        <p className='text-[#00a09b]'>COSTO PROMOCIONAL</p>
                        <p>$15,950.00 + IVA * Mes</p>
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

export default Paquete3;