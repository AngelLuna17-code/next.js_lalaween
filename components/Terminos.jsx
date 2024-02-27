import React, { useState } from 'react';

const Terminos = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='p-8'>
            <div className="container mx-auto p-6 cursor-pointer" onClick={toggleAccordion} style={{ background: 'rgba(0, 0, 0, 0.7)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' }}>
                <div className=''>
                    <p className='text-white text-center typing'>
                        TERMINOS Y CONDICIONES
                    </p>
                    <div className='text-center text-white mt-2'>
                        {isOpen ? '▲' : '▼'}
                    </div>
                </div>
            </div>
            {isOpen &&
                <div className='container mx-auto py-[60px]' style={{ background: 'rgba(0, 0, 0, 0.7)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' }}>
                    <div>
                        <div className='w-[80%] mx-auto'>
                            <ol className='text-white font-semibold text-justify list-decimal'>
                                <li className='mt-3'>
                                    Estos contratos mensuales no incluyen servicio de (Fotografía, cobertura de eventos en vivo, y costos de impresiones)
                                </li>
                                <li className='mt-3'>
                                    Todos los servicios anteriores mencionados se pueden brindar cotizados por independiente o bien ajustando el valor total del contrato.
                                </li>
                                <li className='mt-3'>
                                    La fuente de información de contenido debe ser el cliente: debido a que no somos expertos en diversos temas que nuestros clientes tratan.
                                </li>
                                <li className='mt-3'>
                                    El cliente deberá proporcionar una información base que nosotros podamos materializar en un activo visual y digital.
                                </li>
                                <li className='mt-3'>
                                    Todos los diseños serán enviados al cliente para su revisión y autorización por semana.
                                    <ul style={{ listStyle: "inside" }}>
                                        <li className='mt-3'>
                                            El cliente deberá revisar detalladamente los diseños y temas a publicar, para que las correcciones sean precisas, debido a que solo cuenta con 2 correcciones, para que esto no nos genere ningún retraso mayor en el programa.
                                        </li>
                                        <li className='mt-3'>
                                            Las correcciones solicitadas se realizarán únicamente en días hábiles de Lunes a Viernes en un horario de 9:00 am a 6:00 pm.
                                        </li>
                                        <li className='mt-3'>
                                            Una vez autorizados, pasarán a la siguiente etapa de producción y ya no se podrá realizar ningún cambio.
                                        </li>
                                    </ul>
                                </li>
                                <li className='mt-3'>
                                    La toma de fotografías y grabaciones llevará un costo adicional al plan contratado y deben ser dentro de la ciudad de Tepic, Nayarit, en caso de ser fuera de la misma, el cliente deberá cubrir viáticos de transporte redondo, comidas y hospedaje.
                                </li>
                                <li className='mt-3'>
                                    Cada paquete está estructurado bajo un costo mensual, de manera que los servicios ofrecidos están interrelacionados para equilibrar un costo-beneficio para el cliente y para LalaWeen Creative Team.
                                </li>
                                <li className='mt-3'>
                                    No se podrá hacer ningún tipo de descuento en el caso total del contrato correspondiente. Ya que eso rompe el equilibrio “costo-beneficio” entre ambas partes.
                                </li>
                                <ul style={{ listStyle: "inside" }}>
                                    <li className='mt-3'>
                                        De lo contrario, se necesitaría cobrar cada servicio y/o entregable por unidad, realizado o por realizar en el mes correspondiente, para que el equilibrio costo-beneficio se mantenga para ambas partes
                                    </li>
                                </ul>
                                <li className='mt-3'>
                                    No se entregan los diseños editables, ni fotografías o videos usados de nuestro stock.
                                </li>
                                <li className='mt-3'>
                                    En caso de necesitar factura, se deberá informar, antes del pago, para realizar el cargo del IVA correspondiente a su contrato mensual, de lo contrario no se podrá emitir ninguna factura.
                                </li>
                                <li className='mt-3'>
                                    La factura únicamente será emitida dentro del mismo mes que se realizó el pago.
                                </li>
                            </ol>
                        </div>
                        <div className='mt-3'>
                            <p className='text-white text-center font-semibold'>
                                Si usted desea obtener más información acerca de nuestros servicios y beneficios, lo invitamos a visitar nuestras redes sociales y contactarnos vía What’s app.
                            </p>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default Terminos;