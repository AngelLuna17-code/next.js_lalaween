import Accordion from "../../../components/Accordion";

const Paquete4 = () => {

    return (
        <section>
            {/* Hero */}
            <div className="paqs-hero hero-bg py-[130px]">
                <div className="container mx-auto px-[15px]">
                    <h1>
                        Pa &apos; que economices
                    </h1>
                    <p className="text-xl">
                        Inicia tu presencia en redes sociales y crece tu negocio
                    </p>
                </div>
            </div>
            {/* Hero */}
            <div className='container mx-auto py-[50px] px-[10px]'>
                <div className='p-5 rounded-lg' style={{ background: 'rgba(0, 0, 0, 0.7)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' }}>
                    <div className='text-white'>
                        <div>
                            <p className='text-[#00a09b] typing text-lg'>
                                Proposito
                            </p>
                            <p>
                                Porque sabemos que vas empezando, pero el diseño no es lo tuyo o no tienes tiempo de crear contenido, con
                                esto buscamos crear diseños atractivos y funcionales que le den el toque profesional a las redes sociales de
                                tu negocio
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
                                    Personalizar tus redes en base a tu marca.
                                </li>
                                <li>
                                    Mejorar la calidad visual del contenido de tus redes sociales.
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
                                    Diseño de plantillas para redes sociales (Portada, Perfil y Publicaciones)
                                </li>
                                <li>
                                    Publicaciones en imagen.
                                </li>
                                <li>
                                    4 Publicaciones en imagen tipo slide (Máximo 5 imagenes).
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
                                        Entrega de archivos finales en .Png por correo
                                    </li>
                                    <li>
                                        Entrega de video .Mp4 por correo
                                    </li>
                                    <li>
                                        Uso de imágenes de stock y/ las proporcionadas por el cliente
                                    </li>
                                    <li>
                                        Se entregara un total de 20 publicaciones que podrá subir
                                        usted mismo a sus redes sociales y estados.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='text-center text-white mt-5 typing'>
                        <p className='line-through'>COSTO REAL</p>
                        <p className='line-through'>$5,250.00 + IVA * Mes</p>
                        <p className='text-[#00a09b]'>COSTO PROMOCIONAL</p>
                        <p>$2,625.00 + IVA * Mes</p>
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

export default Paquete4;
