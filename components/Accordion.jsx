"use client";
import React, { useState } from 'react';

function Accordion() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(prevIsOpen => !prevIsOpen);
    };

    return (
        <section>
            <div className='container mx-auto'>
                <div className="rounded-[15px] overflow-hidden">
                    <button
                        className={`w-full text-left p-4 flex justify-between items-center`}
                        style={{ background: 'rgba(0, 0, 0, 0.7)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' }}
                        onClick={toggleAccordion}
                    >
                        <span>{isOpen ? 'cerrar' : 'abrir'}</span>
                        {isOpen ? <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-up-fill inline ml-2" viewBox="0 0 16 16">
                            <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
                        </svg> : <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down-fill inline ml-2" viewBox="0 0 16 16">
                            <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                        </svg>}
                    </button>
                    <div
                        className={`transition-max-height duration-200 ease-in-out overflow-hidden ${isOpen ? 'max-h-96' : 'max-h-0'}`}
                        style={{ maxHeight: isOpen ? '3000px' : '0px' }}
                    >
                        <div className="p-4" style={{ background: 'rgba(0, 0, 0, 0.7)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' }} >
                        <div className='w-[90%] mx-auto'>
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
                </div>
            </div>
        </section>
    );
}

export default Accordion;
